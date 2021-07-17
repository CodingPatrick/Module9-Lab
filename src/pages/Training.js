const Training = () => {
    return (
        <main>
            <br/>
            <div className="container">
                <p>Hoopster \ Training</p>
            </div>
            <div className="container">
            <div class="bg-body container-fluid py-2 mt-3" id="border">
                <h2 class="featurette-heading" id="second"><b>Welcome Hoopsters!</b><br/><span class="text-muted">See our primetime training options below.</span></h2>
                <table class="table table-info table-hover">
                    <thead>
                        <tr>
                            <th style={{width: "90%"}}><h2 className="title">OPEN COURT / OPEN GYM</h2></th>
                            <th style={{width: "10%"}}><h2 className="title">Prices</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>- SHOOT-AROUNDS:</b> Utilize the empty gym to pracice individually on whatever you like.<br/>
                                <b>- BASKETBALL MACHINES:</b> Utilize the technology og our shooting machines to work on your jumpshot.<br/>
                                <b>- DUNKING SESSIONS:</b> The stage is set, dunking only. Have some fun pratcicing your fancy dunks.</td>
                            <td>10$<br/>10$<br/>10$</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-info table-hover">
                    <thead>
                        <tr>
                            <th style={{width: "90%"}}><h2 className="title">GROUP TRAINING</h2></th>
                            <th style={{width: "10%"}}><h2 className="title">Prices</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>- BEGINNER:</b> Our coaches will take you through basic drills to get you familiar with the game.<br/>
                                <b>- AVERAGE:</b> Our coaches will build a foundation of high-quality skills to take your game to the next level.<br/>
                                <b>- EXPERIENCED:</b> Our coaches will push you to the limits with elite level drills and high-quality training.</td>
                            <td>30$<br/>35$<br/>40$</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-info table-hover">
                    <thead>
                        <tr>
                            <th style={{width: "90%"}}><h2 className="title">INDIVIDUAL TRAINING</h2></th>
                            <th style={{width: "10%"}}><h2 className="title">Prices</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>- BEGINNER:</b> Our coaches will take you through basic drills to get you familiar with the game.<br/>
                                <b>- AVERAGE:</b> Our coaches will build a foundation of high-quality skills to take your game to the next level.<br/>
                                <b>- EXPERIENCED:</b> Our coaches will push you to the limits with elite level drills and high-quality training.</td>
                            <td>45$<br/>50$<br/>55$</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-info table-hover">
                    <thead>
                        <tr>
                            <th style={{width: "90%"}}><h2 className="title">ORGANIZED GAMES / PICKUP GAMES</h2></th>
                            <th style={{width: "10%"}}><h2 className="title">Prices</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>- FIBA 3X3 RULES:</b> Play with the olympic FIBA 3X3 rules in intense games with a running clock and score.<br/>
                                <b>- HALF COURT TO 21:</b> Play 5 vs 5 matchup in a halfcourt setting. Less movement, more playing.<br/>
                                <b>- FULL COURT WITH REFS:</b> Play a full court game with time, score and referees.</td>
                            <td>25$<br/>25$<br/>25$</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </main>
    );
}

export default Training;