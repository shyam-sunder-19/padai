import styles from './HorizontalScroll.module.css';

const HorizontalScroll = () => {
    const numberOfLogos = 10;
  
    // Calculate the total width of the logos container
    const containerWidth = numberOfLogos * 120; // Assuming each logo has a width of 120px (including margin)
  
    return (
      <div className={styles.scrollContainer}>
        <div className={styles.logosContainer} style={{ width: containerWidth }}>
          {Array(numberOfLogos)
            .fill()
            .map((_, index) => (
              <div key={index} className={styles.logo}></div>
            ))}
        </div>
      </div>
    );
  };
  
  export default HorizontalScroll;