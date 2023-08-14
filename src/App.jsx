import "./App.css";
import DateCard from "./Components/DateCard";
import EntryCard from "./Components/EntryCard";
function App() {
  return (
    <div className="container mx-auto p-4 md:p-20">
      <div className=" bg-white rounded-[40px] py-10 px-2 md:px-5">
        <div className="timeline relative">
          <DateCard
            data={{
              day: "WED",
              date: "20",
              month: "Jul",
              color: "#3FB883",
            }}
          />
          <EntryCard
            data={{
              title: "New task assigned to you",
              icon: "solar:user-bold",
              color: "#5390EB",
            }}
          />
          <EntryCard
            data={{
              title: "New feedback recived fro Task Name",
              icon: "fluent:person-feedback-16-filled",
              color: "#DC395F",
            }}
          />
          <EntryCard
            data={{
              title: "Task marked completed by you",
              icon: "fe:check",
              color: "#3FB883",
            }}
          />
          <EntryCard
            data={{
              title: "Task Name updated for journey Journey Name",
              icon: "ic:twotone-browser-updated",
              color: "#FB8789",
            }}
          />
          <EntryCard
            data={{
              title:
                "Follow up on feedback for Task Name completed on date XX/YY/ZZZZ",
              icon: "ri:chat-follow-up-line",
              color: "#F2BB27",
            }}
          />
<div className="w-3/4 md:w-2/3 divider"></div>
          <DateCard
            data={{
              day: "THU",
              date: "20",
              month: "Jul",
              color: "#AEAFB2",
            }}
          />

          <EntryCard
            data={{
              title: "Meeting with Bobby Charlie",
              icon: "logos:google-meet",
              color: "#fff",
            }}
          />
          <EntryCard
            data={{
              title: "Chat about design mentorship",
              icon: "clarity:chat-bubble-outline-badged",
              color: "#A259FF",
            }}
          />
          <EntryCard
            data={{
              title: "Critical delay observed in time line adherence",
              icon: "ci:warning",
              color: "#E94235",
            }}
          />
          <EntryCard
            data={{
              title: "Finish project documentation for review",
              icon: "ri:hourglass-fill",
              color: "#F2DF37",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
