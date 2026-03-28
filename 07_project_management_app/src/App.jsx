import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (task) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleRemoveTask = (taskId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleAddProject = (newProject) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
  };

  const handleSelectProject = (projectId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const handleDeleteProject = (projectId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== projectId,
      ),
    }));
  };

  const selectedProject = projectsState.projects.find(
    (p) => p.id === projectsState.selectedProjectId,
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleRemoveTask}
      tasks={projectsState.tasks.filter(
        (task) => task.projectId === projectsState.selectedProjectId,
      )}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
