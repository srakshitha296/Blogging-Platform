const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(cors())

const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectDB = require('./connection')
connectDB()

//Importing BlogPostSchema 
const BlogPostSchema = require('./BlogPostSchema')

//Importing userSchema
const userSchema = require('./userSchema')



app.post('/add', async (req, res) => {
    const { title, content, author } = req.body;
    // Find the maximum postid in the collection
    BlogPostSchema.findOne({}, {}, { sort: { postid: -1 } })
        .then((latestPost) => {
            let newPostid = 1;
            if (latestPost) {
                newPostid = latestPost.postid + 1;
            }

            const post = new BlogPostSchema({
                postid: newPostid,
                title: title,
                content: content,
                author: author
            });

            post.save()
                .then((savedPost) => {
                    res.status(201).json(savedPost);
                    console.log(savedPost);
                })
                .catch((error) => {
                    res.status(500).json({ error: 'Error saving post' });
                    console.log(error);
                });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error retrieving latest post' });
        });

});

app.get('/posts', async (req, res) => {
    try {
        const post = await BlogPostSchema.find();
        res.json(post);
    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).json({ error: ' An error occured' });
    }
});

//API to retrieve post by ID
app.get('/read/:id', async (req, res) => {
    const postId = req.params.id;

    try {
        BlogPostSchema.find({ postid: postId })
            .then((post) => {
                console.log(post);
                console.log('Post retrieved successfully');
                return res.status(200).json(post);
            })
            .catch(() => {
                console.log('Error retrieving post');
                res.status(500).json({ error: 'Error retrieving post' });
            });
    } catch (error) {
        console.log("Error retrieving post");
        console.log(error);
        res.status(500).json({ error: 'Error retrieving post' });
    }

});

app.delete("/deletepost/:postid", async (req, res) => {
    console.log("working");
    try {
        const { postid } = req.params;
        const blogpost = await BlogPostSchema.findOne({ postid });
        if (!blogpost) {
            return res.status(404).json({ meassage: 'Post not found' });
        }
        else {
            BlogPostSchema.findOneAndDelete({ postid })
                .then((deletepost) => {
                    if (!deletepost) {
                        return res.status(404).json({ error: 'failed to delete' });
                    }
                    console.log("deleted");
                    return res.status(200).json({ message: 'Deleted' });
                })

        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

app.put("/updatepost/:postid", async (req, res) => {
    const { postid } = req.params;
    const { title, content, author } = req.body;
    const blogpost = await BlogPostSchema.findOne({ postid });
    if (!blogpost) {
        return res.status(404).json({ message: 'Post not found' });
    } else {
        BlogPostSchema.findOneAndUpdate({ postid }, { title, content, author }, { new: true })
            .then((updatepost) => {
                if (!updatepost) {
                    return res.status(404).json({ error: 'Post not found' });
                }
                return res.status(200).json({ message: "Updated" });
                res.json(updatepost);
            })
            .catch((error) => {
                console.error("Error updating User :", error);
                res.sendStatus(500).json({ error: "An Error occured" });
            });
    }
});

//API to register user
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new userSchema({
            username,
            email,
            password
        });
        await newUser.save();
        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user : ", error);
        res.status(500).json({ error: "An error occured during registration" });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        //Find the user in the database
        const user = await userSchema.findOne({ email : email });
        if (!user) {
            //user not found in the database
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        if (user.password === password) {
            console.log("Credentials are true");
            return res.status(200).json({message : "logged in"})        }
    } catch (error) {
        console.error("Database error : ", error);
        res.status(500).json({ message: "An error occured" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));                  