    import express from 'express';

    const app = express();
    const port = process.env.PORT || 3000;

    // app.get("/",(req,res)=>{
    //     res.send("Hello from Express server!");
    // })
    
    // get a list of 5 popular jokes
    app.get("/jokes",(req,res)=>{
    const jokes = [
    {
        id: 1,
        title: "Why did the developer go broke?",
        content: "Because he used up all his cache!"
    },
    {
        id: 2,
        title: "How many programmers does it take to change a light bulb?",
        content: "None, that's a hardware problem!"
    },
    {
        id: 3,
        title: "Why do Java developers wear glasses?",
        content: "Because they don't C#!"
    },
    {
        id: 4,
        title: "What's a programmer's favorite hangout place?",
        content: "Foo Bar!"
    },
    {
        id: 5,
        title: "Why did the programmer quit his job?",
        content: "Because he didn't get arrays!"
    }
    ];
    res.json(jokes);

    })

    app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })