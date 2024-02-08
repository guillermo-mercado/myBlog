import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



const aboutStartingContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint neque corrupti eos, ea aut at accusantium minima aliquid. Temporibus vitae dolore repudiandae. Officiis et reprehenderit saepe ad odio deserunt quaerat."
const contactStartingContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint neque corrupti eos, ea aut at accusantium minima aliquid. Temporibus vitae dolore repudiandae. Officiis et reprehenderit saepe ad odio deserunt quaerat."

let posts = [];
// blog home page
app.get('/', (req, res) => {
    // render `home.ejs` with the list of posts
    res.render('home', { posts: posts })
})

app.get('/home', (req, res) => {
    res.render('home', { posts: posts })
})

// blog about page
app.get("/about", (req, res) => {
    res.render('about', { aboutContent: aboutStartingContent })
});

// blog contact page
app.get("/contact", (req, res) => {
    res.render('contact', { contactContent: contactStartingContent })
});

app.get("/compose", (req, res) => {
    res.render('compose')
});


app.post("/compose", (req, res) => {
    let postTitle = req.body.postTitle;
    let postContent = req.body.postContent;
    let date = new Date()

    let postObj = {
        "title": postTitle,
        "content": postContent,
        "date": date
    }

    posts.push(postObj)

    console.log(posts)
    // console.log(newPostTitle, newPostContent)
    //res.render('compose', { Title: ostTitle, Content: newPostContent })
});




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
