import styles from './Wordmark.module.css';

/**
 * Brand lockup: the supplied BW Town logo alongside the text wordmark.
 * The logo is the user-supplied brand asset (recreated here as SVG);
 * the text identity remains until approved partnership logos exist.
 */
export function Wordmark() {
  return (
    <>
      <img
        className={styles.logo}
        src="/bw-town-logo.svg"
        alt="BW Town"
        width={175}
        height={34}
      />
      <span className="wordmark-text">
        Brighton Community
        <br />
        Development Partnership
        <small>Brighton, Alabama</small>
      </span>
    </>
  );
}
