"use client";
import React from "react";
import styles from "./FeedbackSection.module.css";

function FeedbackSection() {
  return (
    <section className={styles.feedbackSection}>
      <h2 className={styles.sectionTitle}>Feedbacks</h2>
      <div className={styles.feedbackGrid}>
        <article className={styles.feedbackCard}>
          <blockquote className={styles.feedbackQuote}>
            "A terrific piece of praise"
          </blockquote>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="26:1087" layer-name="Avatar" width="149" height="50" viewBox="0 0 149 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="avatar" style="width: 150px; height: 50px"> <circle cx="22.5" cy="25" r="22.5" fill="#D9D9D9"></circle> <circle cx="22.5" cy="25" r="22.5" fill="url(#pattern0_26_1087)"></circle> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" font-weight="500" letter-spacing="0em"><tspan x="61" y="17.8182">Name</tspan></text> <text fill="#828282" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" font-weight="500" letter-spacing="0em"><tspan x="61" y="43.8182">Description</tspan></text> <defs> <pattern id="pattern0_26_1087" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_26_1087" transform="translate(-0.0809929) scale(0.000283688)"></use> </pattern>  </defs> </svg>',
              }}
            />
          </div>
        </article>

        <article className={styles.feedbackCard}>
          <blockquote className={styles.feedbackQuote}>
            "A fantastic bit of feedback"
          </blockquote>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="26:1094" layer-name="Avatar" width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="avatar" style="width: 150px; height: 50px"> <circle cx="22.8335" cy="25" r="22.5" fill="#D9D9D9"></circle> <circle cx="22.8335" cy="25" r="22.5" fill="url(#pattern0_26_1094)"></circle> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" font-weight="500" letter-spacing="0em"><tspan x="61.3335" y="17.8182">Name</tspan></text> <text fill="#828282" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" font-weight="500" letter-spacing="0em"><tspan x="61.3335" y="43.8182">Description</tspan></text> <defs> <pattern id="pattern0_26_1094" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_26_1094" transform="translate(0 -0.00468211) scale(0.000246427)"></use> </pattern>  </defs> </svg>',
              }}
            />
          </div>
        </article>

        <article className={styles.feedbackCard}>
          <blockquote className={styles.feedbackQuote}>
            "A genuinely glowing review"
          </blockquote>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="26:1101" layer-name="Avatar" width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="avatar" style="width: 150px; height: 50px"> <circle cx="23.1665" cy="25" r="22.5" fill="#D9D9D9"></circle> <circle cx="23.1665" cy="25" r="22.5" fill="url(#pattern0_26_1101)"></circle> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" font-weight="500" letter-spacing="0em"><tspan x="61.6665" y="17.8182">Name</tspan></text> <text fill="#828282" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" font-weight="500" letter-spacing="0em"><tspan x="61.6665" y="43.8182">Description</tspan></text> <defs> <pattern id="pattern0_26_1101" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_26_1101" transform="translate(0 -0.250183) scale(0.0003663)"></use> </pattern>  </defs> </svg>',
              }}
            />
          </div>
        </article>
      </div>
    </section>
  );
}

export default FeedbackSection;
