import React from 'react'

const Addtodo = () => {
    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <div className="col-2 text-center" style={{ marginTop: "36px" }}>
                        <i class="fa-solid fa-2x fa-record-vinyl"></i>
                    </div>
                    <div className="col-6 my-4">
                        <h1 className="text-center">Create task</h1>
                    </div>
                    <div className="col-4 text-center" style={{ marginTop: "25px" }}>
                        <i class="fa-solid fa-4x fa-ellipsis"></i>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-4">
                        <p className='logintext'>App Design</p>
                    </div>
                    <div className="col-8 learnmore">
                        <a href="#" className=' text-center'>Learn more</a>
                    </div>
                </div>
            </div>
            <div className='container my-4'>
                <h2 className="">Add Task topic</h2>
                <form>
                    <div className="mb-3">
                        {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" style={{ backgroundColor: "#8c99a470" }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" style={{ padding: "7px 40px" }}>Create Now</button>
                </form>
            </div>
        </>
    )
}

export default Addtodo