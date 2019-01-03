import React, {Component} from 'react';

export default (props) => (

        <div className="container col-md-12">
            <div className="row">
                <form onSubmit={props.onSubmit}>
                    <div className="">
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                name="name"
                                type="text"
                                placeholder="Name User"
                                className="form-control"
                                value={props.user.name}
                                onChange={props.onChange}
                                />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Password "
                                name="password"
                                value={props.user.password}
                                onChange={props.onChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                type="text"
                                placeholder="Email"
                                className="form-control"
                                value={props.user.email}
                                onChange={props.onChange}
                                />
                        </div>
                        <div className="form-group">
                        <button className="btn btn-lg btn-primary text-uppercase">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
);
