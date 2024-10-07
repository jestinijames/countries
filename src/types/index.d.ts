import { Icons } from "@/components/common/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}
// Define the Sidebar context shape
export interface SidebarContextProps {
  isMinimized: boolean;
  toggle: () => void;
}

export type SidebarProps = {
  className?: string;
};

export interface CountriesContextType {
  countries: Country[];
  setCountries: Dispatch<SetStateAction<Country[]>>;
  filteredCountries: Country[];
  searchTerm: string;
  region: string;
  sort: string;
  visibleCount: number;
  setSearchTerm: (term: string) => void;
  setRegion: eact.Dispatch<React.SetStateAction<string>>;
  setSort: eact.Dispatch<React.SetStateAction<string>>;
  loadMoreCountries: () => void;
  resetFilters: () => void;
  loading: boolean;
  error: boolean;
}

export interface ContextProps {
  search: string;
  region: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

export interface SortProps {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProviderProps {
  children: React.ReactNode;
}

export type Country = {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
};

export interface CountryProps {
  countries: Country[];
}

export type CapitalInfo = {
  latlng?: number[];
};

export type Car = {
  signs?: string[];
  side: Side;
};

export type Side = "right" | "left";

export type CoatOfArms = {
  png?: string;
  svg?: string;
};

export type Continent =
  | "Asia"
  | "Oceania"
  | "Europe"
  | "North America"
  | "Antarctica"
  | "South America"
  | "Africa";

export type Currencies = {
  jod?: Aed;
  usd?: Aed;
  rsd?: Aed;
  eur?: Aed;
  bmd?: Aed;
  bob?: Aed;
  lyd?: Aed;
  xof?: Aed;
  amd?: Aed;
  mur?: Aed;
  mvr?: Aed;
  mkd?: Aed;
  etb?: Aed;
  dkk?: Aed;
  iqd?: Aed;
  gtq?: Aed;
  ttd?: Aed;
  pen?: Aed;
  srd?: Aed;
  sek?: Aed;
  xpf?: Aed;
  fkp?: Aed;
  zwl?: Aed;
  sar?: Aed;
  aed?: Aed;
  afn?: Aed;
  xaf?: Aed;
  pab?: Aed;
  syp?: Aed;
  vuv?: Aed;
  hnl?: Aed;
  aud?: Aed;
  kid?: Aed;
  clp?: Aed;
  xcd?: Aed;
  mxn?: Aed;
  cny?: Aed;
  ssp?: Aed;
  szl?: Aed;
  zar?: Aed;
  uzs?: Aed;
  idr?: Aed;
  pyg?: Aed;
  pln?: Aed;
  bam?: BAM;
  cad?: Aed;
  brl?: Aed;
  mru?: Aed;
  ils?: Aed;
  ang?: Aed;
  bnd?: Aed;
  sgd?: Aed;
  aoa?: Aed;
  byn?: Aed;
  try?: Aed;
  gip?: Aed;
  btn?: Aed;
  inr?: Aed;
  ves?: Aed;
  qar?: Aed;
  czk?: Aed;
  kwd?: Aed;
  nzd?: Aed;
  jmd?: Aed;
  kyd?: Aed;
  pkr?: Aed;
  kzt?: Aed;
  bhd?: Aed;
  fjd?: Aed;
  isk?: Aed;
  mmk?: Aed;
  bdt?: Aed;
  php?: Aed;
  npr?: Aed;
  yer?: Aed;
  krw?: Aed;
  omr?: Aed;
  ern?: Aed;
  irr?: Aed;
  tzs?: Aed;
  sbd?: Aed;
  kes?: Aed;
  dop?: Aed;
  gbp?: Aed;
  ggp?: Aed;
  rwf?: Aed;
  tvd?: Aed;
  twd?: Aed;
  gyd?: Aed;
  scr?: Aed;
  kpw?: Aed;
  bwp?: Aed;
  khr?: Aed;
  bbd?: Aed;
  cop?: Aed;
  uah?: Aed;
  nad?: Aed;
  top?: Aed;
  ars?: Aed;
  crc?: Aed;
  ghs?: Aed;
  shp?: Aed;
  egp?: Aed;
  cuc?: Aed;
  cup?: Aed;
  huf?: Aed;
  bzd?: Aed;
  bsd?: Aed;
  awg?: Aed;
  stn?: Aed;
  rub?: Aed;
  fok?: Aed;
  nio?: Aed;
  tnd?: Aed;
  cdf?: Aed;
  nok?: Aed;
  sll?: Aed;
  lsl?: Aed;
  djf?: Aed;
  lkr?: Aed;
  wst?: Aed;
  tmt?: Aed;
  mdl?: Aed;
  chf?: Aed;
  mwk?: Aed;
  lbp?: Aed;
  mnt?: Aed;
  thb?: Aed;
  ngn?: Aed;
  cve?: Aed;
  jep?: Aed;
  dzd?: Aed;
  lak?: Aed;
  azn?: Aed;
  mad?: Aed;
  bgn?: Aed;
  bif?: Aed;
  ugx?: Aed;
  mzn?: Aed;
  gel?: Aed;
  ron?: Aed;
  vnd?: Aed;
  jpy?: Aed;
  lrd?: Aed;
  htg?: Aed;
  pgk?: Aed;
  hkd?: Aed;
  kgs?: Aed;
  mga?: Aed;
  gmd?: Aed;
  myr?: Aed;
  sos?: Aed;
  mop?: Aed;
  all?: Aed;
  zmw?: Aed;
  ckd?: Aed;
  gnf?: Aed;
  kmf?: Aed;
  imp?: Aed;
  sdg?: BAM;
  tjs?: Aed;
  uyu?: Aed;
};

export type Aed = {
  name: string;
  symbol: string;
};

export type BAM = {
  name: string;
};

export type Demonyms = {
  eng: Eng;
  fra?: Eng;
};

export type Eng = {
  f: string;
  m: string;
};

export type Flags = {
  png: string;
  svg: string;
  alt?: string;
};

export type Idd = {
  root?: string;
  suffixes?: string[];
};

export type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

export type Name = {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
};

export type Translation = {
  official: string;
  common: string;
};

export type PostalCode = {
  format: string;
  regex?: string;
};

export type Region =
  | "Asia"
  | "Oceania"
  | "Europe"
  | "Americas"
  | "Antarctic"
  | "Africa";

export type StartOfWeek = "sunday" | "monday" | "saturday";

export type Status = "officially-assigned" | "user-assigned";
