type ExploreCountryButtonProps = {
  onClick: () => void;
};

const ExploreCountryButton = ({ onClick }: ExploreCountryButtonProps) => {
  return (
    <button
      className="explore-btn"
      onClick={onClick}
    >
      Explore Country
    </button>
  );
};

export default ExploreCountryButton;