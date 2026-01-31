import React,{ useState, Activity } from "react";
import './styles.css'
// Create an React component to display the folder structure visually (like a file explorer).
// Implement expand/collapse functionality on folder click.

const folderData = {
  name: "React-app",
  type: "folder",
  children: [
    {
      name: "public",
      type: "folder",
      children: [
        { name: "index.html", type: "file" },
        { name: "favicon.ico", type: "file" },
      ],
    },
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "assets",
          type: "folder",
          children: [{ name: "logo.png", type: "file" }],
        },
        {
          name: "components",
          type: "folder",
          children: [
            { name: "Header.tsx", type: "file" },
            { name: "Footer.tsx", type: "file" },
          ],
        },
        {
          name: "pages",
          type: "folder",
          children: [
            { name: "Home.tsx", type: "file" },
            { name: "About.tsx", type: "file" },
          ],
        },
        { name: "App.tsx", type: "file" },
        { name: "main.tsx", type: "file" },
      ],
    },
    { name: "package.json", type: "file" },
    { name: "tsconfig.json", type: "file" },
    { name: "README.md", type: "file" },
  ],
};

const Folder = React.memo(({ folderData, marginFromParant }) => {
  const [expand, setExpend] = useState(false);
console.log("lalchadhfskd")
  return (
    <div style={{marginLeft:`${marginFromParant}px`}}>
      <div style={folderData.type==='folder'?{cursor:'pointer'}:{}} onClick={() => setExpend((pre) => !pre)}>{folderData.type==='folder'?'📁':'📄'}{folderData.name}</div>
      { folderData?.children
        ? folderData.children.map((item) => {
            return <Activity mode={expand?"visible":'hidden'}><Folder folderData={item} marginFromParant={marginFromParant+5} /></Activity>;
          })
        : ""}
    </div>
  );
})

export default function FolderStructure() {
  return (
    <div className="FolderStructure">
      <Folder folderData={folderData} marginFromParant={5} />
    </div>
  );
}