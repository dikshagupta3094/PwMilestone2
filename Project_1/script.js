document.addEventListener('DOMContentLoaded',loadBlog)

// form will be visible
let addIcon = document.getElementById('add-icon')
addIcon.addEventListener('click',()=>{
  document.querySelector('#form-wrapper').style.display = 'flex'
})

//form will not visible
const crossIcon = document.getElementById('cross-icon')
crossIcon.addEventListener('click',()=>{
    document.querySelector('#form-wrapper').style.display = 'none'
})

//dynamic add blog
const addBlog = document.getElementById('add-blog')
addBlog.addEventListener('click',()=>{
 let postURL = document.getElementById('image-url').value
 let blogTitle = document.getElementById('blog-title').value
 let blogDescription = document.getElementById('blog-description').value
 let detailedBlogDescription = document.getElementById('blog-textarea').value

 //create blog object

 const blog = {
  postURL,
  blogTitle,
  blogDescription,
  detailedBlogDescription
 }
 
  //save blog to local storage
  saveBlogToLocalStoeage(blog)

  //Render's blog from local storage

  renderBlogFromLocalStorage(blog)


 
  document.getElementById('form-wrapper').style.display = 'none'
  clearFormFields()
})
//clear form data
function clearFormFields(){
  document.getElementById('image-url').value = ''
  document.getElementById('blog-title').value = ''
  document.getElementById('blog-description').value = ''
  document.getElementById('blog-textarea').value = ''
}

//save data to local Storage
function saveBlogToLocalStoeage(blog){
   let blogs = localStorage.getItem('blogs')
   if(blogs){
     blogs = JSON.parse(blogs)
   }
   else{
    blogs = []
   }
   blog.id = new Date().getTime()
   console.log("Id",blog.id);
    blogs.push(blog)
   localStorage.setItem('blogs', JSON.stringify(blogs))

}
//load  blog data
function loadBlog(){
  let blogs = localStorage.getItem('blogs')
 
  console.log("Blogs", blogs);
  if(blogs){
    blogs = JSON.parse(blogs)
    blogs.forEach(blog=>renderBlogFromLocalStorage(blog))
  }
}
//render blog
function renderBlogFromLocalStorage(blog){
  const {postURL, blogTitle, blogDescription, detailedBlogDescription,id} = blog
    

 //For adding CSS Style used blog-wrapper id and add style in it 
 let contentBox = document.getElementById('blog-wrapper')
  
 //main Blog wrapper for styling
 const blogBox = document.createElement('div')

  //Blog Image
 const blogImage = document.createElement('div')
 const img = document.createElement('img')
 img.setAttribute('src',postURL)
 img.setAttribute('alt','BloGImage')
 blogImage.appendChild(img)
 console.log(blogImage);
 blogImage.classList.add('blog-image')
 blogBox.appendChild(blogImage)

 //blog heading and description div
 const blogContent = document.createElement('div')
 //Blog Heading in h3 tag
 const title = document.createElement('h3')
 title.textContent = blogTitle
 blogContent.appendChild(title)
 blogContent.classList.add('blog-content')
 blogBox.appendChild(blogContent)

// Blog Description in p tag
 const descriptioncontent = document.createElement('p')
 descriptioncontent.textContent = blogDescription
 blogContent.appendChild(descriptioncontent)
 blogContent.classList.add('blog-content')
 blogBox.appendChild(blogContent)
 blogBox.classList.add('blog-box')

// creating read Blog button 
 const readBlog = document.createElement('a')
 readBlog.setAttribute('href', './readBlog.html');
 readBlog.innerHTML = 'Read';
 readBlog.classList.add('readBlog');

//detailedBlogDescription
readBlog.addEventListener('click', function(e) {
   e.preventDefault()
   localStorage.setItem('SelectId',id)
   window.location.href = './readBlog.html'
});
blogBox.appendChild(readBlog);

contentBox.appendChild(blogBox)

}