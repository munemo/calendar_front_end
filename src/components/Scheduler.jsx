import React, { Component } from "react";
import "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";

const scheduler = window.scheduler;

export default class Scheduler extends Component {
  initSchedulerEvents() {
    if (scheduler._$initialized) {
      return;
    }

    const onDataUpdated = this.props.onDataUpdated;

    scheduler.attachEvent("onEventAdded", (id, ev) => {
      if (onDataUpdated) {
        onDataUpdated("create", ev, id);
      }
    });

    scheduler.attachEvent("onEventChanged", (id, ev) => {
      if (onDataUpdated) {
        onDataUpdated("update", ev, id);
      }
    });

    scheduler.attachEvent("onEventDeleted", (id, ev) => {
      if (onDataUpdated) {
        onDataUpdated("delete", ev, id);
      }
    });
    scheduler._$initialized = true;
  }

  componentDidMount() {
    scheduler.skin = "material";
    scheduler.config.header = [
      "day",
      "week",
      "month",
      "date",
      "prev",
      "today",
      "next",
    ];

    scheduler.config.hour_date = "%g:%i %A";
    scheduler.xy.scale_width = 70;

    const { events } = this.props;
    scheduler.init(this.schedulerContainer, new Date(2021, 1.2));
    scheduler.clearAll();
    scheduler.parse(events);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.timeFormatSate !== nextProps.timeFormatSate;
  }

  componentDidUpdate() {
    scheduler.render();
  }

  setTimeFormat(state) {
    scheduler.config.hour_date = state ? "%H:%i" : "%g:%i %A";
    scheduler.templates.hour_scale = scheduler.date.date_to_str(
      scheduler.config.hour_date
    );
  }

  render() {
    const { timeFormatSate } = this.props;
    this.setTimeFormat(timeFormatSate);
    return (
      <div
        ref={(input) => {
          this.schedulerContainer = input;
        }}
        style={{ width: "100%", height: "100%" }}
      ></div>
    );
  }
}

