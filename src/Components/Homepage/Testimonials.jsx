import styles from "./Testimonials.module.css";

export default function Gallery() {
  return (
    <section className={styles["section-testimonials"]} id="testimonials">
      <div className={styles["testomonial-gallery-container"]}>
        <div className={styles["testimonials-container"]}>
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secondary">What our student&apos;s says</h2>

          <div className={styles["testimonials"]}>
            <figure className={styles["testimonial"]}>
              <div className={styles["testimonial-image-name"]}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjXIf8ewt1DbtFukZpaaQgpQmxVl9mjevr6VhmXvnCpviKGmpuHp=w60-h60-p-rp-mo-br100"
                  alt="profile of reveiwer"
                  className={styles["testimonial-img"]}
                />
                <span className={styles["testimonial-name"]}>Samir Bhatta</span>
              </div>
              <blockquote className={styles["testimonial-text"]}>
                Edupalnepal is best for Loksewa classes .
              </blockquote>
            </figure>

            <figure className={styles["testimonial"]}>
              <div className={styles["testimonial-image-name"]}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjXacdTA8Lyj1f-deBB6Lu062L4_uymXFrumhRK8eq2KaU_1-cc9=w60-h60-p-rp-mo-ba4-br100"
                  alt="profile of reveiwer"
                  className={styles["testimonial-img"]}
                />
                <span className={styles["testimonial-name"]}>Sansar Maske</span>
              </div>
              <blockquote className={styles["testimonial-text"]}>
                Finest education institution in Dhangadhi.
              </blockquote>
            </figure>

            <figure className={styles["testimonial"]}>
              <div className={styles["testimonial-image-name"]}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjVOLPragKeVf8VM6ATOMD7U7Kb96gz7CnzgBwfyQrieJOgMHf_f=w60-h60-p-rp-mo-ba5-br100"
                  alt="profile of reveiwer"
                  className={styles["testimonial-img"]}
                />
                <span className={styles["testimonial-name"]}>
                  Reversed World
                </span>
              </div>
              <blockquote className={styles["testimonial-text"]}>
                Best educational institute for tuition classes.
              </blockquote>
            </figure>

            <figure className={styles["testimonial"]}>
              <div className={styles["testimonial-image-name"]}>
                <img
                  src="../Students/surya.jpg"
                  height="60"
                  width="60"
                  alt="profile of reveiwer"
                  className={styles["testimonial-img"]}
                  style={{ borderRadius: "50%" }}
                />
                <span className={styles["testimonial-name"]}>
                  Surya Bikram Thapa
                </span>
              </div>
              <blockquote className={styles["testimonial-text"]}>
                Edupalnepal is no 1 institute in dhangadhi. Great respected IQ
                sir
                <a
                  href="https://www.facebook.com/tekpant"
                  className={styles["name-link"]}
                >
                  {" "}
                  Tek Pant{" "}
                </a>
              </blockquote>
            </figure>
          </div>
        </div>

        <div
          className={styles["gallery"]}
          onClick={(e) => console.log(e.target.src)}
        >
          <figure
            className={`${styles["gallery-item"]} ${styles["gallery-1"]}`}
          >
            <img
              src="./Gallery-imgs/Gallery-1-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure
            className={`${styles["gallery-item"]} ${styles["gallery-2"]}`}
          >
            <img
              src="./Gallery-imgs/Gallery-2-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="./Gallery-imgs/Gallery-3-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="./Gallery-imgs/Gallery-4-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="./Gallery-imgs/Gallery-5-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="./Gallery-imgs/Gallery-6-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="./Gallery-imgs/Gallery-7-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="./Gallery-imgs/Gallery-8-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="./Gallery-imgs/Gallery-9-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="./Gallery-imgs/Gallery-10-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure
            className={`${styles["gallery-item"]} ${styles["gallery-11"]}`}
          >
            <img
              src="./Gallery-imgs/Gallery-11-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
          <figure
            className={`${styles["gallery-item"]} ${styles["gallery-12"]}`}
          >
            <img
              src="./Gallery-imgs/Gallery-12-100.jpg"
              alt="group of students at edupalnepal"
              className={styles["gallery-img"]}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
