import BaseAlert from "../components/BaseAlert";
import BaseButton from "../components/BaseButton";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseInput from "../components/BaseInput";
import BaseDropdown from "../components/BaseDropdown";
import BaseNav from "../components/BaseNav";
import BasePagination from "../components/BasePagination";
import BaseProgress from "../components/BaseProgress";
import BaseRadio from "../components/BaseRadio";
import BaseSlider from "../components/BaseSlider";
import BaseSwitch from "../components/BaseSwitch";
import BaseTable from "../components/BaseTable";
import BaseHeader from "../components/BaseHeader";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import Modal from "../components/Modal";

export default {
  install(Vue) {
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(Card.name, Card);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(Modal.name, Modal);
  }
};
