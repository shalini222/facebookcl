import StoryCard from "../components/StoryCard";

const stories = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Harry Potter",
    profile: "https://links.papareact.com/d0c",
    src: "https://links.papareact.com/d0c",
  },
  {
    name: "Shalini222",
    profile:
      "https://scontent.fccu2-1.fna.fbcdn.net/v/t1.6435-9/p843x403/95781574_279628609836268_2647226345842540544_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=QD7V7dle-2YAX-AkitQ&_nc_ht=scontent.fccu2-1.fna&oh=d2b24e69d7a00515086a39f0c90d677a&oe=60F4FEE9",
    src: "https://scontent.fccu2-2.fna.fbcdn.net/v/t1.6435-9/179056233_516838776115249_7331059677850268919_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=LPR6lXN_CBYAX9Ayq8h&_nc_ht=scontent.fccu2-2.fna&oh=f1a55f96f9f51d29e8793cfb511f6b87&oe=60F4F012",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(({ name, src, profile }) => (
        <StoryCard key={src} name={name} src={src} profile={profile} />
      ))}
    </div>
  );
}

export default Stories;
