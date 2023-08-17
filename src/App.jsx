import "./App.css";
import DateCard from "./Components/DateCard";
import EntryCard from "./Components/EntryCard";
import data from '/public/data.json'
function App() {
  return (
    <div className="container mx-auto p-2 lg:p-20">
      <div className=" bg-white rounded-md lg:rounded-[40px] py-5 lg:py-10 px-3 lg:px-5">
        <div className="timeline relative"> 
          {  
            data.map((item,idx)=>(
              <>
              <DateCard key={idx} data={item}/>
              {
                item.tasks.map((task,idx) => <EntryCard key={idx} data={task}/>)
              }
              <div className="w-3/4 lg:w-2/3 divider"></div>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
