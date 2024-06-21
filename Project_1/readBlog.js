document.addEventListener('DOMContentLoaded',function(){
    const id = JSON.parse(localStorage.getItem('SelectId'))
      console.log("Selcted Id:",id);
    if(id){
     let blogs = JSON.parse(localStorage.getItem('blogs'))
     console.log('BLOG',blogs)
     const blog = blogs.find((blog)=>blog.id === id)
     
     if(blog){
      
      const readWrapper = document.getElementById('read-wrapper')
      const readBlogDiv = document.createElement('div')

      const contentOfInsideReadBlogDiv = document.createElement('div')
 
      //Title
      const title = document.createElement('h2')
      title.textContent = blog.blogTitle
      contentOfInsideReadBlogDiv.appendChild(title)
      contentOfInsideReadBlogDiv.classList.add('content')
      readBlogDiv.appendChild(contentOfInsideReadBlogDiv)
      readBlogDiv.classList.add('read-Blog')
     
      //Description

      const description = document.createElement('p')
      description.textContent = blog.blogDescription
      contentOfInsideReadBlogDiv.appendChild(description)
      contentOfInsideReadBlogDiv.classList.add('content')
      readBlogDiv.appendChild(contentOfInsideReadBlogDiv)
      readBlogDiv.classList.add('read-Blog')
    
      //Image

      const ImageDiv = document.createElement('div')
      const img = document.createElement('img')
      img.setAttribute('src',blog.postURL)
      img.setAttribute('alt','blogImage')
      img.setAttribute('height','220px')
      img.setAttribute('width','280px')
      ImageDiv.appendChild(img)
      ImageDiv.classList.add('img-section')
      readBlogDiv.appendChild(ImageDiv)
      readBlogDiv.classList.add('read-Blog')
      console.log(readBlogDiv);
      
      readWrapper.appendChild(readBlogDiv)

      //Detailed description
    const paraDiv = document.createElement('div')
     const para = document.createElement('p')
     para.textContent = blog.detailedBlogDescription
     paraDiv.appendChild(para)
     paraDiv.classList.add('text')
     readWrapper.appendChild(paraDiv)
      
    console.log(readWrapper);

    
    
      // 
     }
    }

})