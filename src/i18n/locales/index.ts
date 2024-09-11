import menuEN from './en-menu.json';
import menuRU from './ru-menu.json';
import heroEN from './en-hero.json';
import heroRU from './ru-hero.json';
import aboutEN from './en-about.json';
import aboutRU from './ru-about.json';
import EcosystemEN from './en-ecosystem.json';
import EcosystemRU from './ru-ecosystem.json';
import SubscriptionEN from './en-subscription.json';
import SubscriptionRU from './ru-subscription.json';
import FaqEN from './en-faq.json';
import FaqRu from './ru-faq.json';
import RoadmapEn from './en-roadmap.json';
import RoadmapRu from './ru-roadmap.json';
import FooterEn from './en-footer.json';
import FooterRu from './ru-footer.json';
import CommonEn from './en-common.json';
import CommonRu from './ru-common.json';

const resources = {
    ru: {
        menu: menuRU,
        hero: heroRU,
        about: aboutRU,
        ecosystem: EcosystemRU,
        subscription: SubscriptionRU,
        faq: FaqRu,
        roadmap: RoadmapRu,
        footer: FooterRu,
        common: CommonRu,
    },
    en: {
        menu: menuEN,
        hero: heroEN,
        about: aboutEN,
        ecosystem: EcosystemEN,
        subscription: SubscriptionEN,
        faq: FaqEN,
        roadmap: RoadmapEn,
        footer: FooterEn,
        common: CommonEn,
    },
};

export default resources;
