import React from "react";

export default function Card() {
    return (
    <div>
        <div>
            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src="https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is some Important Text</p>
                    <div className="container ">
                        <select className="m-2 h-100  bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                                );})
                            }
                        </select>
                        
                        <select className="m-2 h-100  bg-success rounded">
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        
                        <div className="d-inline h-100 fs-5">Total Price</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
