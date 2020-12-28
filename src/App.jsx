import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import MessageArea from "./components/MessageArea";
//import Login from "./components/Login";
//import Register from "./components/Register";
//import Home from "./components/Home";

import Scheduler from "./components/Scheduler";

const data = [
  {
    start_date: "2020-01-04 6:00",
    end_date: "2020-07-12",
    text: "Event 1",
    id: 1,
  },
  {
    start_date: "2020-01-04 6:00",
    end_date: "2020-07-12",
    text: "Event 2",
    id: 2,
  },
];



class App extends Component {
  state = {
    currentTimeFormatState: true,
    messages: [],
  };

  addMessage(message) {
    const maxLogLength = 5;
    const newMessage = { message };
    const messages = [newMessage, ...this.state.messages];

    if (messages.length > maxLogLength) {
      messages.length = maxLogLength;
    }
    this.setState({ messages });
  }

  logDataUpdate = (action, ev, id) => {
    const text = ev && ev.text ? ` (${ev.text})` : "";
    const message = `event ${action}: ${id} ${text}`;
    this.addMessage(message);
  };

  handleTimeFormatStateChange = (state) => {
    this.setState({
      currentTimeFormatState: state,
    });
  };

  render() {
    const { currentTimeFormatState, messages } = this.state;
    return (
      <div>
        <div className="tool-bar">
          <Toolbar
            timeFormatState={currentTimeFormatState}
            onTimeFormatStateChange={this.handleTimeFormatStateChange}
          />
        </div>

        <div className="scheduler-container">
          <Scheduler events={data}
            timeFormatState={currentTimeFormatState}
            onDataUpdated={this.logDataUpdate}/>
        </div>
        <MessageArea messages={messages}/>
      </div>
    );
  }
}
  
export default App;
