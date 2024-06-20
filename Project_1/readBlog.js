document.addEventListener('DOMContentLoaded',function(){
    const id = JSON.parse(localStorage.getItem('SelectId'))
      console.log("Selcted Id:",id);
    if(id){
     let blogs = JSON.parse(localStorage.getItem('blogs'))
     console.log('BLOG',blogs)
     const blog = blogs.find((blog)=>blog.id === id)
     
     if(blog){
        const content = document.createElement('div')
        
        const title = document.createElement('h2')
        title.textContent = blog.blogTitle
        content.appendChild(title)
        

        const Image = document.createElement('img')
        const ImageURL = blog.postURL
        Image.setAttribute('src',ImageURL)
        content.appendChild(Image)

        document.body.appendChild(content)
     }
    }

})