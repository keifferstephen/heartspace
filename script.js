let posts = JSON.parse(localStorage.getItem("heartPosts")) || [];


function save(){
    localStorage.setItem("heartPosts",JSON.stringify(posts));
}



function addPost(){

    let name=document.getElementById("name").value;
    let mood=document.getElementById("mood").value;
    let message=document.getElementById("message").value;


    if(message.trim()==""){
        alert("Please write something first.");
        return;
    }


    posts.unshift({

        name:name || "Anonymous",
        mood:mood,
        text:message,
        replies:[]

    });


    save();
    display();


    document.getElementById("message").value="";

}



function addReply(index){

    let input=document.getElementById("reply"+index);


    if(input.value.trim()==""){
        return;
    }


    posts[index].replies.push(input.value);

    save();
    display();

}




function display(){

    let container=document.getElementById("posts");

    container.innerHTML="";


    posts.forEach((post,index)=>{


        let replies="";


        post.replies.forEach(r=>{

            replies+=`
            <div class="comment">
            🫂 ${r}
            </div>`;

        });



        container.innerHTML+=`

        <div class="card">

        <h3>
        ${post.mood}
        </h3>

        <small>
        Posted by ${post.name}
        </small>


        <p>
        ${post.text}
        </p>


        ${replies}


        <div class="reply">

        <input id="reply${index}"
        placeholder="Leave support...">

        <button onclick="addReply(${index})">
        Reply
        </button>

        </div>


        </div>

        `;


    });


}


display();