import { createContext, useContext, useState, ReactNode } from "react";
import { DetailProjectProps } from "@/interface/interface";

type ModalState = DetailProjectProps | null;

interface ModalContextProps {
  isModalOpen: boolean;
  selectedProject: ModalState;
  openModal: (detailProject: DetailProjectProps) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ModalState>(null);

  const openModal = (detailProject: DetailProjectProps) => {
    setSelectedProject(detailProject);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const contextValue: ModalContextProps = {
    isModalOpen,
    selectedProject,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
