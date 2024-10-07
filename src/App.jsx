import OuterCard from "./Components/OuterCard";
import InnerCard from "./Components/InnerCard";
import Elements from "./Components/Elements";
import Select from "./Components/Select";
import Like from "./Components/Like";
import DisLike from "./Components/DisLike";
import ProgressBar from "./Components/ProgressBar";


const App = () => {
  return (
  <div className="bg-gray-900 w-[500] h-[500px] my-20 mx-5 flex flex-row gap ">
    <OuterCard>
     <InnerCard imageUrl='https://i.pinimg.com/originals/13/ee/85/13ee852db585e08fe8585a226775c5ee.jpg'/>
     <Elements>
      <Select shape="circle"></Select>
      <Like style="circle"></Like>
      <DisLike style="circle" tooltipPosition="top"></DisLike>
     </Elements>
     <ProgressBar progress='20' color='blue'/>
    </OuterCard>
    <OuterCard>
    <InnerCard imageUrl='https://m.media-amazon.com/images/S/pv-target-images/bf89a5e29566cac43ab49fbe6b7ef62f1a7acb448e21b96959ffe4e85888f116.jpg'/>
     <Elements>
      <Select shape="rounded"></Select>
      <Like style="rounded"></Like>
      <DisLike style="rounded" tooltipPosition="bottom"></DisLike>
     </Elements>
     <ProgressBar progress='60' color='purple'/>
    </OuterCard>
    <OuterCard>
    <InnerCard imageUrl="https://static.tvtropes.org/pmwiki/pub/images/d712d7a9_0b77_401e_916a_dc123d0994fe.jpeg"/>
    <Elements>
      <Select shape="none"></Select>
      <Like style="none"></Like>
      <DisLike style="none" tooltipPosition=" "></DisLike>
     </Elements>
     <ProgressBar progress='80' color='red'/>
    </OuterCard>
  </div>

  );
};

export default App;
