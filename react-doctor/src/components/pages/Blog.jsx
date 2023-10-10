import axios from "axios";
import {useState} from "react";


export function Blog() {
    const [articles, setArticles] = useState('')

    async function getArticles() {
        try {
            const response = await axios.get('https://127.0.0.1:8000/api/articles.json');
            console.log(response);
        } catch (error) {
            console.error(error);
        }

        const testArticles = await getArticles()
        console.log(testArticles)
    }

    //
    // const blogArticles = axios.get('https://127.0.0.1:8000/api/articles.json')
    //     .then(function (response) {
    //         // handle success
    //         // console.log(response.data);
    //
    //         // const lastArticles = response.data.sort((a, b) => a.createdAt - b.createdAt)
    //         // console.log(lastArticles)
    //         // response.data.map((item) => console.log(item.createdAt))
    //         return response
    //
    //
    //         // response.data.map((article) => {
    //         //     return setArticles(article.title)
    //         // })
    //     })
    //
    // console.log(blogArticles)

    return <>
        <div>{articles}</div>
        <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block text-center">
                            <span className="text-white">News details</span>
                            <h1 className="text-capitalize mb-5 text-lg">Blog Single</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section blog-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12 mb-5">
                                <div className="single-blog-item">
                                    <img src="images/blog/blog-1.jpg" alt="" className="img-fluid"/>

                                    <div className="blog-item-content mt-5">
                                        <div className="blog-item-meta mb-3">
                                            <span className="text-color-2 text-capitalize mr-3"><i
                                                className="icofont-book-mark mr-2"></i> Equipment</span>
                                            <span className="text-muted text-capitalize mr-3"><i
                                                className="icofont-comment mr-2"></i>5 Comments</span>
                                            <span className="text-black text-capitalize mr-3"><i
                                                className="icofont-calendar mr-2"></i> 28th January 2019</span>
                                        </div>

                                        <h2 className="mb-4 text-md"><a href="blog-single.html">Healthy environment to
                                            care with modern equipment</a></h2>

                                        <p className="lead mb-4">Non illo quas blanditiis repellendus laboriosam minima
                                            animi. Consectetur accusantium pariatur repudiandae!</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus,
                                            consectetur? Illum libero vel nihil nisi quae, voluptatem, sapiente
                                            necessitatibus distinctio voluptates, iusto qui. Laboriosam autem, nam
                                            voluptate in beatae. Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Quae iure officia nihil nemo, repudiandae itaque similique praesentium
                                            non aut nesciunt facere nulla, sequi sunt nam temporibus atque earum,
                                            ratione, labore.</p>

                                        <blockquote className="quote">
                                            A brand for a company is like a reputation for a person. You earn reputation
                                            by trying to do hard things well.
                                        </blockquote>


                                        <p className="lead mb-4 font-weight-normal text-black">The same is true as we
                                            experience the emotional sensation of stress from our first instances of
                                            social rejection ridicule. We quickly learn to fear and thus
                                            automatically.</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, rerum beatae
                                            repellat tenetur incidunt quisquam libero dolores laudantium. Nesciunt quis
                                            itaque quidem, voluptatem autem eos animi laborum iusto expedita
                                            sapiente.</p>

                                        <div className="mt-5 clearfix">
                                            <ul className="float-left list-inline tag-option">
                                                <li className="list-inline-item"><a href="#">Advancher</a></li>
                                                <li className="list-inline-item"><a href="#">Landscape</a></li>
                                                <li className="list-inline-item"><a href="#">Travel</a></li>
                                            </ul>

                                            <ul className="float-right list-inline">
                                                <li className="list-inline-item"> Share:</li>
                                                <li className="list-inline-item"><a href="#" target="_blank"><i
                                                    className="icofont-facebook" aria-hidden="true"></i></a></li>
                                                <li className="list-inline-item"><a href="#" target="_blank"><i
                                                    className="icofont-twitter" aria-hidden="true"></i></a></li>
                                                <li className="list-inline-item"><a href="#" target="_blank"><i
                                                    className="icofont-pinterest" aria-hidden="true"></i></a></li>
                                                <li className="list-inline-item"><a href="#" target="_blank"><i
                                                    className="icofont-linkedin" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="comment-area mt-4 mb-5">
                                    <h4 className="mb-4">2 Comments on Healthy environment... </h4>
                                    <ul className="comment-tree list-unstyled">
                                        <li className="mb-5">
                                            <div className="comment-area-box">
                                                <div className="comment-thumb float-left">
                                                    <img alt="" src="images/blog/testimonial1.jpg"
                                                         className="img-fluid"/>
                                                </div>

                                                <div className="comment-info">
                                                    <h5 className="mb-1">John</h5>
                                                    <span>United Kingdom</span>
                                                    <span className="date-comm">| Posted April 7, 2019</span>
                                                </div>
                                                <div className="comment-meta mt-2">
                                                    <a href="#"><i
                                                        className="icofont-reply mr-2 text-muted"></i>Reply</a>
                                                </div>

                                                <div className="comment-content mt-3">
                                                    <p>Some consultants are employed indirectly by the client via a
                                                        consultancy staffing company, a company that provides
                                                        consultants on an agency basis. </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="comment-area-box">
                                                <div className="comment-thumb float-left">
                                                    <img alt="" src="images/blog/testimonial2.jpg"
                                                         className="img-fluid"/>
                                                </div>

                                                <div className="comment-info">
                                                    <h5 className="mb-1">Philip W</h5>
                                                    <span>United Kingdom</span>
                                                    <span className="date-comm">| Posted June 7, 2019</span>
                                                </div>

                                                <div className="comment-meta mt-2">
                                                    <a href="#"><i className="icofont-reply mr-2 text-muted"></i>Reply
                                                    </a>
                                                </div>

                                                <div className="comment-content mt-3">
                                                    <p>Some consultants are employed indirectly by the client via a
                                                        consultancy staffing company, a company that provides
                                                        consultants on an agency basis. </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <form className="comment-form my-5" id="comment-form">
                                    <h4 className="mb-4">Write a comment</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" id="name"
                                                       placeholder="Name:"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="mail" id="mail"
                                                       placeholder="Email:"/>
                                            </div>
                                        </div>
                                    </div>


                                    <textarea className="form-control mb-4" name="comment" id="comment" cols="30"
                                              rows="5"
                                              placeholder="Comment"></textarea>

                                    <input className="btn btn-main-2 btn-round-full" type="submit" name="submit-contact"
                                           id="submit_contact" value="Submit Message"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                            <div className="sidebar-widget search  mb-3 ">
                                <h5>Search Here</h5>
                                <form action="#" className="search-form">
                                    <input type="text" className="form-control" placeholder="search"/>
                                    <i className="ti-search"></i>
                                </form>
                            </div>


                            <div className="sidebar-widget latest-post mb-3">
                                <h5>Popular Posts</h5>


                                <div className="py-2">
                                    <span className="text-sm text-muted">03 Mar 2018</span>
                                    <h6 className="my-2"><a href="#">Thoughtful living in los Angeles</a></h6>
                                </div>


                                <div className="py-2">
                                    <span className="text-sm text-muted">03 Mar 2018</span>
                                    <h6 className="my-2"><a href="#">Vivamus molestie gravida turpis.</a></h6>
                                </div>

                                <div className="py-2">
                                    <span className="text-sm text-muted">03 Mar 2018</span>
                                    <h6 className="my-2"><a href="#">Fusce lobortis lorem at ipsum semper sagittis</a>
                                    </h6>
                                </div>
                            </div>

                            <div className="sidebar-widget category mb-3">
                                <h5 className="mb-4">Categories</h5>

                                <ul className="list-unstyled">
                                    <li className="align-items-center">
                                        <a href="#">Medicine</a>
                                        <span>(14)</span>
                                    </li>
                                    <li className="align-items-center">
                                        <a href="#">Equipments</a>
                                        <span>(2)</span>
                                    </li>
                                    <li className="align-items-center">
                                        <a href="#">Heart</a>
                                        <span>(10)</span>
                                    </li>
                                    <li className="align-items-center">
                                        <a href="#">Free counselling</a>
                                        <span>(5)</span>
                                    </li>
                                    <li className="align-items-center">
                                        <a href="#">Lab test</a>
                                        <span>(5)</span>
                                    </li>
                                </ul>
                            </div>


                            <div className="sidebar-widget tags mb-3">
                                <h5 className="mb-4">Tags</h5>

                                <a href="#">Doctors</a>
                                <a href="#">agency</a>
                                <a href="#">company</a>
                                <a href="#">medicine</a>
                                <a href="#">surgery</a>
                                <a href="#">Marketing</a>
                                <a href="#">Social Media</a>
                                <a href="#">Branding</a>
                                <a href="#">Laboratory</a>
                            </div>


                            <div className="sidebar-widget schedule-widget mb-3">
                                <h5 className="mb-4">Time Schedule</h5>

                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between align-items-center">
                                        <a href="#">Monday - Friday</a>
                                        <span>9:00 - 17:00</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center">
                                        <a href="#">Saturday</a>
                                        <span>9:00 - 16:00</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center">
                                        <a href="#">Sunday</a>
                                        <span>Closed</span>
                                    </li>
                                </ul>

                                <div className="sidebar-contatct-info mt-4">
                                    <p className="mb-0">Need Urgent Help?</p>
                                    <h3>+23-4565-65768</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>


    //
    // const axios = require('axios');
    //
    // const blogArticles = axios.get('https://127.0.0.1:8000/api/articles')
    //     .then((response) => {
    //         console.log(response)
    //     });
    // console.log(blogArticles)
}