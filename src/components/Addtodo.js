import React from 'react'

const Addtodo = () => {
    return (
        <>
            <div className="container">

            </div>
            <div className='container my-4'>
                <h1 className="">Add Task topic</h1>
                <form>
                    <div class="mb-3">
                        {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Create Now</button>
                </form>
            </div>
        </>
    )
}

export default Addtodo