import React from 'react'

function HomeBody() {
  return (
    <>
    <div className='homeHead'>
    <h3 style={{textAlign:"center"}}>About Us</h3>
    <div className='underline'></div>
</div>
<div className='container container-fluid d-flex ' style={{ margin: "36px 0px" }}>

<div className='container row ' style={{padding:"28px 0px"}} >
    <div className='home-info col-5' style={{ textAlign: "center", color: "black" }}>
        <h1 id="head-shopping" >Online Shopping</h1>
        <p className='pt-3'><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero dolores suscipit odio at, porro nemo beatae repellat dolorem a earum alias error, ex laudantium neque quidem, nobis ut?</i></p>
    
    </div>
    <div className='img container-fluid col-5'>
        <img src="homeImg.jpg" alt="" style={{ height: "100%", width: "100%", borderRadius: "10px" }} />
    </div>
</div>
</div>
</>
  )
}

export default HomeBody