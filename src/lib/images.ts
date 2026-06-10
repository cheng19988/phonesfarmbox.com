import {
  FACTORY_DEPLOY_IMAGES,
  getAllModelMainImages,
  getPrimaryModelImage,
  HERO_IMAGES,
  MOTHERBOARD_GALLERY,
} from "@/data/product-model-catalog";

const P = "phonesfarmbox.com";
const card = (name: string) => `/images/card_800x800/${P}-${name}-card_800x800.webp`;
const hero = (name: string) => `/images/hero_1600x900/${P}-${name}-hero_1600x900.webp`;
const detail = (name: string) => `/images/detail_1200x900/${P}-${name}-detail_1200x900.webp`;

const primaryModel = getPrimaryModelImage() ?? "/images/products/models/s21-fe-main-product-box-phone-farm-s21-fe-6-128gb-usb-lan-ot.webp";
const modelMains = getAllModelMainImages();

/** Real product / factory photos imported from provided asset libraries (watermarks OK). */
export const IMPORTED = {
  homeHero: HERO_IMAGES["home"] ?? "/images/hero-import/hero-clean-01.webp",
  pageHero: HERO_IMAGES["hero-2"] ?? "/images/hero-import/hero-clean-02.webp",
  factoryHero: FACTORY_DEPLOY_IMAGES[0] ?? "/images/factory/deploy-01.webp",
  factoryGallery: FACTORY_DEPLOY_IMAGES.slice(0, 6).map((src, i) => ({
    src,
    label: ["Room-scale deployment", "Stacked farm units", "Production batch", "Export-ready layout", "Multi-rack reference", "Operations floor"][i] ?? "Deployment reference",
  })),
  whiteBgGallery: [
    HERO_IMAGES["home"],
    HERO_IMAGES["hero-2"],
    HERO_IMAGES["hero-3"],
    ...MOTHERBOARD_GALLERY.slice(0, 3),
  ],
} as const;

export const IMAGES = {
  homeHero: IMPORTED.homeHero,
  phoneFarmBox: {
    card: primaryModel,
    hero: primaryModel,
    detail: primaryModel,
  },
  motherboardBox: {
    card: MOTHERBOARD_GALLERY[0] ?? card("components-electronicscomponentslayout-64e0d"),
    hero: MOTHERBOARD_GALLERY[1] ?? MOTHERBOARD_GALLERY[0] ?? hero("components-electronicscomponentslayout-64e0d"),
    detail: MOTHERBOARD_GALLERY[2] ?? MOTHERBOARD_GALLERY[0] ?? detail("components-electronicscomponentslayout-64e0d"),
  },
  androidFarm: {
    card: modelMains[2] ?? primaryModel,
    hero: modelMains[1] ?? primaryModel,
    detail: modelMains[3] ?? primaryModel,
  },
  iphoneFarm: {
    card: card("product-box-2025-10-25-11-37-img-0566-ee21b"),
    hero: hero("product-box-2025-10-25-11-37-img-0566-ee21b"),
    detail: detail("product-box-2025-10-25-11-37-img-0566-ee21b"),
  },
  realDevice: {
    card: FACTORY_DEPLOY_IMAGES[1] ?? primaryModel,
    hero: FACTORY_DEPLOY_IMAGES[0] ?? primaryModel,
    detail: FACTORY_DEPLOY_IMAGES[2] ?? primaryModel,
  },
  emptyBox: {
    card: MOTHERBOARD_GALLERY[0] ?? primaryModel,
    hero: MOTHERBOARD_GALLERY[1] ?? MOTHERBOARD_GALLERY[0] ?? primaryModel,
    detail: MOTHERBOARD_GALLERY[2] ?? MOTHERBOARD_GALLERY[0] ?? primaryModel,
  },
  usbHub: {
    card: card("components-electronicscomponentsassembly-19059"),
    hero: hero("components-electronicscomponentsassembly-19059"),
    detail: detail("components-electronicscomponentsassembly-19059"),
  },
  power: {
    card: card("components-electronicsassemblylabworkbench-9e7df"),
    hero: hero("components-electronicsassemblylabworkbench-9e7df"),
    detail: detail("components-electronicsassemblylabworkbench-9e7df"),
  },
  cooling: {
    card: card("components-electronics-workbenchdetail-6f814"),
    hero: hero("components-electronics-workbenchdetail-6f814"),
    detail: detail("components-electronics-workbenchdetail-6f814"),
  },
  network: {
    card: card("accessories-networkdevice-accessories-36665"),
    hero: hero("accessories-networkdevice-accessories-36665"),
    detail: detail("accessories-networkdevice-accessories-36665"),
  },
  customCabinet: {
    card: FACTORY_DEPLOY_IMAGES[0] ?? primaryModel,
    hero: FACTORY_DEPLOY_IMAGES[1] ?? primaryModel,
    detail: FACTORY_DEPLOY_IMAGES[2] ?? primaryModel,
  },
  remoteControl: {
    card: card("service-scenes-moderndevicemanagementcontrol-ae6b9"),
    hero: hero("service-scenes-moderndevicemanagementcontrol-ae6b9"),
    detail: detail("service-scenes-moderndevicemanagementcontrol-ae6b9"),
  },
  serviceScene: hero("service-scenes-moderntechoffice-devicecontrol-2663b"),
  factory: IMPORTED.factoryHero,
  workshop: FACTORY_DEPLOY_IMAGES[2] ?? IMPORTED.factoryHero,
  office: hero("service-scenes-moderntechofficeworkspace-23aa6"),
  meeting: hero("service-scenes-modernoffice-lab-28010"),
  warehouse: hero("accessories-electronics-accessories-1cc0b"),
  diyParts: {
    card: card("accessories-techaccessories-showcase-80dfb"),
    hero: hero("accessories-techaccessories-showcase-80dfb"),
    detail: detail("accessories-techaccessories-showcase-80dfb"),
  },
} as const;
