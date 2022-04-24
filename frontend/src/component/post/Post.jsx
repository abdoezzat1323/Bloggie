import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Iam title XD ^^</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo, quas aliquam magnam alias accusamus magni ipsam culpa non consectetur voluptates eligendi eos, unde accusantium repellendus, vitae voluptatum laborum quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo, quas aliquam magnam alias accusamus magni ipsam culpa non consectetur voluptates eligendi eos, unde accusantium repellendus, vitae voluptatum laborum quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo, quas aliquam magnam alias accusamus magni ipsam culpa non consectetur voluptates eligendi eos, unde accusantium repellendus, vitae voluptatum laborum quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo, quas aliquam magnam alias accusamus magni ipsam culpa non consectetur voluptates eligendi eos, unde accusantium repellendus, vitae voluptatum laborum quasi.</p>
    </div>
  )
}
