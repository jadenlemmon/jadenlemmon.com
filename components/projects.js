const projects = [
  {
    id: 1,
    alternate: true,
    title: 'Voyage',
    img: 'voyage',
    website: 'voyageapp.io',
    link: 'https://voyageapp.io',
    labels: ['Node', 'JS', 'React', 'Docker'],
    description: `Voyage lets you build isolated environments in minutes and makes it easy to share your work with anyone, so you can spend more time coding.`,
  },
  {
    id: 2,
    title: 'Actovos',
    img: 'actovos',
    website: 'actovos.com',
    link: 'http://actovos.com',
    labels: ['PHP', 'JS', 'React'],
    description: `Actovos is web and mobile application that streamlines the process of connecting foster parents with children in need.`,
  },
  {
    id: 3,
    alternate: true,
    title: 'Oyster Dating',
    img: 'oyster',
    website: 'oysterapp.io',
    link: 'http://oysterapp.io',
    labels: ['PHP', 'React', 'JS'],
    description: `Oyster is a location based dating application written in React Native. 
    Users are able to see other users in real-time at real locations. I was the lead developer on this project 
    working on the front and back of the application. I developed a custom api written in PHP to interface with the front-end of the application.`,
  },
  {
    id: 4,
    title: 'JS Products - PDMS System',
    img: 'jsp',
    website: 'jsproducts.com',
    link: 'http://www.jsproducts.com',
    labels: ['Node.js', 'JS', 'React', 'Enterprise'],
    description: `PDMS is an internal tool created for JS Products. This tool manages their internal manufacturing process. I played a lead role 
    building a front-end application with React. The application interfaced with a Node.js API.`,
  },
  {
    id: 5,
    alternate: true,
    title: 'Campaign Inbox',
    img: 'campaign_inbox',
    website: 'campaigninbox.com',
    link: 'http://campaigninbox.com/',
    labels: ['Python', 'JS', 'Enterprise', 'React', 'Typescript'],
    description: `I played a lead role building a front-end application with React and Typescript. The application interfaced with a Python based API.`,
  },
];

const Project = ({ project }) => (
  <div className="project" key={project.id}>
    <div className="container">
      <div
        className={`${
          project.alternate ? 'col-lg-push-6' : ''
        } col-md-6 text-center`}
      >
        <img style={{ maxHeight: 300 }} src={`/static/${project.img}.png`} />
      </div>
      <div className={`${project.alternate ? 'col-lg-pull-6' : ''} col-md-6`}>
        <h2>{project.title}</h2>
        <a className="link" href={project.link} target="_blank">
          {project.website}
        </a>
        <p>{project.description}</p>
        {project.labels.map((label, id) => (
          <span
            key={id}
            className="label label-success"
            style={{ marginRight: 2 }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects">
    {projects.map((project) => (
      <Project project={project} key={project.id} />
    ))}
  </section>
);

export default Projects;
