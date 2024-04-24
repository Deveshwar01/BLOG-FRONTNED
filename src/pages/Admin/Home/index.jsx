import React from 'react'
import "./style.css"
import DisplayBlog from 'components/admin/Blog/DashBoardMiddleSection/displayBlog'
import Sidebar from 'components/admin/dashBoard-sideBar/index'
import PodcastSideBar from 'components/admin/Podcast/podcast-Sidebar'
const index = () => {
    return (
        <>
            <nav class="main-menu">
                <Sidebar/>
            </nav>

            <section class="content">
                <DisplayBlog/>

                <div class="right-content">
                    <div class="analytics">
                        <h1>Analytics</h1>
                        <div class="analytics-container">
                            <div class="total-events">
                                <div class="event-number card">
                                    <h2>Total no of Blogs</h2>
                                    <p>20</p>
                                    <i class="bx bx-check-circle"></i>
                                </div>
                                <div class="event-number card">
                                    <h2>Total no of Podcasts</h2>
                                    <p>3</p>
                                    <i class="bx bx-timer"></i>
                                </div>
                            </div>

                            {/* <div class="chart" id="doughnut-chart">
                        <h2>Distribution of Attended Events</h2>
                        <canvas id="doughnut"></canvas>
                        <ul></ul>
                    </div> */}
                    
                        </div>
                    </div>

                    <div class="contacts">
                        <PodcastSideBar/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index