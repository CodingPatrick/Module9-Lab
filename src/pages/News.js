import thumbnail from '../pictures/news1.jpg';
import nba from '../pictures/news4.jpg';
import wnba from '../pictures/news2.jpg';
import usa from '../pictures/news3.jpg';
import ncaa from '../pictures/news5.jpg';
import {ShowAndHide1} from '../script';
import {ShowAndHide2} from '../script';
import {ShowAndHide3} from '../script';
import {ShowAndHide4} from '../script';

const News = () => {
    return (
        <main>
            <br/>
            <div className="container">
                <p>Hoopster \ News</p>
            </div>
            <div className="container">
            <div class="bg-body container-fluid py-2 mt-3" id="border">
            
            <div class="p-4 p-md-5 mb-4 text-white rounded" style={{backgroundImage: `url(${thumbnail})`}}>
                <div class="col-md-6 px-0">
                    <h1 class="display-4 fst-italic" id="show">NBA Finals: Bucks Even the Series 2-2</h1>
                    <p class="lead my-3" id="show">Khris Middleton scored 40 points and Giannis Antetokoumpo with a game saving block. Milwaukee beats Phoenix 109-103.</p>
                    <div class="btn-group"><button type="button" onClick={ShowAndHide1} class="btn btn-outline-secondary text-white" id="show">READ MORE</button></div>
                </div>
            </div>

            <hr className="mb-4"/>
            <h2 class="featurette-heading" id="second"><b>News</b><br/><span class="text-muted">Read the recent buzz.</span></h2>

            <div class="row row-cols-1 row-cols-sm-2">
            <br/><br/>
                <div class="col">
                    <div class="card shadow-sm">
                        <img src={nba} alt="pic" style={{width: "100%"}}/>
                        <div class="card-body">
                            <p class="card-text"><span class="title">NBA Finals: Bucks Even the Series 2-2</span><br/><br/> Khris Middleton scored 40 points and Giannis Antetokoumpo with a game saving block. Milwaukee beats Phoenix 109-103.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group"><button type="button" onClick={ShowAndHide1} class="btn btn-sm btn-outline-secondary">READ MORE</button></div>
                                <small class="text-muted">3 mins</small>
                            </div>
                            <div id="section1" style={{display: "none"}}><br/>The Milwaukee Bucks just keep fighting back in pursuit of their first NBA championship in 50 years. Getting clutch defensive plays and Khris Middleton's hot shooting down the stretch, the Bucks earned a tough, 109-103 victory 
                            over the Phoenix Suns in Game 4 of the NBA Finals on Wednesday night at Fiserv Forum. After losing the first two games on the road, the Bucks won two at home to even the best-of-seven series at 2-2. The Finals return to Phoenix for Game 5 at 8 p.m. Saturday. The Bucks will host Game 6. 
                            They improved to 9-1 at Fiserv Forum this postseason.</div>
                        </div>
                    </div>
                    <br/>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <img src={wnba} alt="pic" style={{width: "100%"}}/>
                        <div class="card-body">
                            <p class="card-text"><span class="title">WNBA All-Star: Allie Quigley wins again</span><br/><br/>The American-Hungarian professional basketball player wins her 3rd three-point contest shootout in the WNBA All-Star weekend festivities.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group"><button type="button" onClick={ShowAndHide2} class="btn btn-sm btn-outline-secondary">READ MORE</button></div>
                                <small class="text-muted">2 mins</small>
                            </div>
                            <div id="section2" style={{display: "none"}}><br/>Allie Quigley again showed why she's among the WNBA's elite shooters, winning her third career 3-point contest Wednesday night at the All-Star Game in Las Vegas. It was a close one, but Quigley defeated Connecticut Sun star Jonquel Jones in 
                            the final round to take home the 2021 title. In the first round, Quigley had 27 points. In the final round, Quigley beat Jones by going perfect from her money rack -- she made the game-winning basket with about four seconds left -- and dropping 28 points. The Chicago Sky guard also won the 3-point 
                            challenge at the 2017 and 2018 All-Star Games.</div>
                        </div>
                    </div>
                    <br/>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <img src={ncaa} alt="pic" style={{width: "100%"}}/>
                        <div class="card-body">
                            <p class="card-text"><span class="title">NCAA: New champions have risen</span><br/><br/>The Baylor Bears reign victorious over the rest of the league as they win the 2021 NCAA March Madness tournament.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group"><button type="button" onClick={ShowAndHide3} class="btn btn-sm btn-outline-secondary">READ MORE</button></div>
                                <small class="text-muted">2 mins</small>
                            </div>
                            <div id="section3" style={{display: "none"}}><br/>Eighteen years ago, when Scott Drew talked about coming to Baylor "for a chance to win a national championship," he might have been the only one who actually believed it. Everyone else was laughing. 
                            Nobody's laughing now. Denying top-ranked Gonzaga's bid for the first undefeated season in 45 years, the Baylor Bears (28-2) jumped out to a double-digit lead in the first four minutes and never looked back in blowing out the Bulldogs, 86-70, Monday night at Lucas Oil Stadium to win 
                            the first national championship in program history.</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <img src={usa} alt="pic" style={{width: "100%"}}/>
                        <div class="card-body">
                            <p class="card-text"><span class="title">Olympic: Team USA's struggles continue</span><br/><br/>The once powerhouse has now lost 2 exhibition games in a row, falling to Australia last night. Team Australia beats USA 91 to 83 in regular time.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group"><button type="button" onClick={ShowAndHide4} class="btn btn-sm btn-outline-secondary">READ MORE</button></div>
                                <small class="text-muted">1 min</small>
                            </div>
                            <div id="section4" style={{display: "none"}}><br/>They lost their second consecutive exhibition Monday, this time bested by Australia 91-83 in Las Vegas. Dating to the 2019 World Cup, where they finished seventh, Team USA has lost four of its past five games. It also has lost two in a row now to Australia, 
                            a team expected to contend for the gold in Japan. The Americans had an 11-point first-half lead and played effective physical defense at times, holding Australia to just 13 points in the second quarter. After giving up 20 3-pointers in the exhibition opener, 
                            there was a clear effort to challenge them better and Australia had just 10.</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </main>
    );
}

export default News;