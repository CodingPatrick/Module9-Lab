import '../css/message.css';
import icon from '../pictures/icon.png';
import {ShowAndHide5} from '../script';

const Chat = () => {
    return (
        <main>
            <br/>
            <div className="container">
                <p>Hoopster \ Chat</p>
            </div>
            <div className="container">
                <div className="bg-body container-fluid py-2 mt-3" id="border">
                    <h2 className="featurette-heading"><b>Chat</b><br/><span className="text-muted">A simple way of communication.</span></h2>
                
                    {/* https://bootsnipp.com/snippets/1ea0N */} 
                    <div class="messaging">
                        <div class="inbox_msg">
                            <div class="inbox_people">
                                <div class="headind_srch">
                                    <div class="recent_heading">
                                        <h4>Chats</h4>
                                    </div>
                                </div>
                                <div class="inbox_chat">
                                    <div class="chat_list active_chatd">
                                        <div class="chat_people">
                                            <div class="chat_img"><img src={icon} style={{width: "24px"}} alt="pic"/></div>
                                            <div class="chat_ib">
                                                <h5>Coach Dan Smith</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat_list active_chat">
                                        <div class="chat_people">
                                            <div class="chat_img"> <img src={icon} style={{width: "24px"}} alt="pic"/> </div>
                                            <div class="chat_ib">
                                                <h5>Klay Thompson</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat_list active_chat">
                                        <div class="chat_people">
                                            <div class="chat_img"> <img src={icon} style={{width: "24px"}} alt="pic"/> </div>
                                            <div class="chat_ib">
                                                <h5>Luka Doncic</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat_list active_chat">
                                        <div class="chat_people">
                                            <div class="chat_img"> <img src={icon} style={{width: "24px"}} alt="pic"/> </div>
                                            <div class="chat_ib">
                                                <h5>Michael Jordan</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div class="mesgs">
                                <div class="msg_history">
                                <div class="outgoing_msg">
                                        <div class="sent_msg">
                                            <p>Hey Coach Dan! I really enjoyed your training the other day! Any more tips for my shooting?</p>
                                        </div>
                                    </div>
                                    <div class="incoming_msg">
                                        <div class="received_msg">
                                            <div class="received_withd_msg">
                                                <p>Great to hear back from you. Check out this video: https://youtu.be/x7anDE7OEww</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="outgoing_msg">
                                        <div class="sent_msg">
                                            <p>Awesome, thank you so much!!!</p>
                                        </div>
                                    </div>
                                    <div class="incoming_msg">
                                        <div class="received_msg">
                                            <div class="received_withd_msg">
                                                <p>No problem.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="section6" style={{display: "none"}}>
                                        <div class="outgoing_msg">
                                            <div class="sent_msg">
                                                <p>Is there any availability to for training with you this week?</p>
                                            </div>
                                        </div>
                                        <div class="incoming_msg">
                                            <div class="received_msg">
                                                <div class="received_withd_msg">
                                                    <p>Yeah for sure, let me check my schedule, I'll get back to you in 5 minutes.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="type_msg">
                                        <div class="input_msg_write">
                                            <br/>
                                            <input type="text" class="write_msg" id="mess" placeholder="Type a message" />
                                            <div class="submit">
                                                <br/>
                                                <button class="btn btn-primary" type="button" onClick={ShowAndHide5}>SEND</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Chat;