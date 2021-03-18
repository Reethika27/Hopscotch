import React from 'react';
import './Static/CSS/banner.css';
import {Row} from 'reactstrap';
import MiniLook from './MiniLook';
import ValuePack from './ValuePack';
import Coupon from './Coupon';
import BudgetFashion from './BudgetFashion';
import LimitedTime from './LimitedTime';
import MommyRecommend from './MommyRecommend';
import Bycategory from './ByCategory';
import EverdayEssentials from'./EverdayEssentials';
import OfferItems from './OfferItems';
import ShoeShop from './ShoeShop';
import PartyShop from './PartyShop';
import WeekFlavour from './WeekFlavour';
import LookCool from './LookCool';
import ForeverFav from './ForeverFav';
import ToyShop from './ToyShop';
import FestiveCollections from './FestiveCollections';
import FeedingCorner from './FeedingCorner';
import DailyCare from './DailyCare';
import CharacterShop from './CharacterShop';
import ConnectWithUS from './ConnectWithUS';
import Moments from './Moments';
import Explore from './Explore';


const Banners = (props) => {
    return (
        <Row  > 
                <MiniLook/>
                <ValuePack/>
                <Coupon/>
                <BudgetFashion/>
                <LimitedTime/>
                <Bycategory/>
                <MommyRecommend/>
                <EverdayEssentials/>
                <OfferItems/>
                <ShoeShop/>
                <PartyShop/>
                <WeekFlavour/>
                <LookCool/>
                <ForeverFav/>
                <ToyShop/>
                <FestiveCollections/>
                <FeedingCorner/>
                <DailyCare/>
                <CharacterShop/>
                <Explore/>
                <Moments/> 
                <ConnectWithUS/>
               
        </Row>

      
      );
    };

export default Banners;
