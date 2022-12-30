const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
const btn = document.querySelector(".btn");
let respond = false;
let ask_movie = false;
let youtube_tab;
let netflix_tab;
let sratim_tab;
let sdarot_tab;
let youtube_search = false;
let netflix_search = false;
let movies = false;
let ask_name = false;
let say_name = false;
let conform_name = false;
let google_search = false;
let google_tab;
let calculate = false;
let alarm_set = false;



recognition.onresult = (e) => {
    let text = e.results[0][0].transcript;

    if (text.includes("שלום") || text.includes("היי") || text.includes("זה אני")) {
        respond = true;
        let random = Math.floor(Math.random() * 101);
        if (random > 30 && random < 60) {
            play_text("טוב לשמוע אותך");
        }
        if (random < 30) {
            if (localStorage.getItem("name")) {
                play_text(`שלום ${localStorage.getItem("name")}`);
            } else {
                play_text("שלום איתמר");
            }
        }
        if (random > 60) {
            play_text("שלום, מה אני יכול לעשות בשבילך?");
        }
    }



    if (respond == true) {

        if (text.includes("יוטיוב")) {
            if (text.includes("תסגור") || text.includes("לסגור") || text.includes("סגור") || text.includes("תזכור") || text.includes("תזכורת")) {
                if (youtube_tab != null) {
                    youtube_tab.close();
                    youtube_tab = null;
                    let random = Math.floor(Math.random() * 101);
                    if (random > 30 && random < 60) {
                        play_text("בטח, למה לא");
                    }
                    if (random < 30) {
                        play_text("סוגר את יוטיוב");
                    }
                    if (random > 60) {
                        play_text("בשמחה");
                    }
                } else {
                    let random = Math.floor(Math.random() * 101);
                    if (random > 30 && random < 60) {
                        play_text("אני יכול לסגור רק דברים שפתחתי");
                    }
                    if (random < 30) {
                        play_text("אני לא פתחתי את יוטיוב ובגלל זה אני לא יכול לסגור אותו");
                    }
                    if (random > 60) {
                        play_text("אני לא יכול לסגור את יוטיוב כי לא אני פתחתי אותו");
                    }
                }
            } else if (text.includes("חיפוש") || text.includes("חפש") || text.includes("תחפש") || text.includes("תמצא") || text.includes("למצוא") || text.includes("לחפש")) {
                play_text("מה תרצה לחפש?");
                text = "123";
                youtube_search = true;
            } else {
                youtube_tab = window.open("https://www.youtube.com/");
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("בטח, למה לא");
                }
                if (random < 30) {
                    play_text("פותח את יוטיוב");
                }
                if (random > 60) {
                    play_text("בשמחה");
                }
            }

        }




        if (youtube_search == true) {
            if (text.includes("ביטול") || text.includes("תבטל") || text.includes("לבטל") || text.includes("לא")) {
                let random = Math.floor(Math.random() * 101);
                youtube_search = false;
                if (random > 30 && random < 60) {
                    play_text("בטח, למה לא");
                }
                if (random < 30) {
                    play_text("בשמחה");
                }
                if (random > 60) {
                    play_text("מבטל");
                }
            } else {
                if (text != "123" && text != "תרצה לחפש" && text != "מה תרצה לחפש") {
                    youtube_search = false;
                    youtube_tab = window.open(`https://www.youtube.com/results?search_query=${text}`);
                    play_text(`מחפש ${text}`);
                }
            }
        }









        if (text.includes("נטפליקס") || text.includes("סרט")) {
            if (text.includes("תסגור") || text.includes("לסגור") || text.includes("סגור") || text.includes("תזכור") || text.includes("תזכורת")) {
                if (netflix_tab != null) {
                    netflix_tab.close();
                    netflix_tab = null;
                    let random = Math.floor(Math.random() * 101);
                    if (random > 30 && random < 60) {
                        play_text("בטח, למה לא");
                    }
                    if (random < 30) {
                        play_text("סוגר את נטפליקס");
                    }
                    if (random > 60) {
                        play_text("בשמחה");
                    }
                } else {
                    let random = Math.floor(Math.random() * 101);
                    if (random > 30 && random < 60) {
                        play_text("אני יכול לסגור רק דברים שפתחתי");
                    }
                    if (random < 30) {
                        play_text("אני לא פתחתי את נטפליקס ובגלל זה אני לא יכול לסגור אותו");
                    }
                    if (random > 60) {
                        play_text("אני לא יכול לסגור את נטפליקס כי לא אני פתחתי אותו");
                    }
                }
            } else if (text.includes("חיפוש") || text.includes("חפש") || text.includes("תחפש") || text.includes("תמצא") || text.includes("למצוא") || text.includes("לחפש") || text.includes("סרט")) {
                play_text("מה תרצה לחפש?");
                text = "123";
                netflix_search = true;
            } else {
                netflix_tab = window.open("https://www.netflix.com/Kids");
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("בטח, למה לא");
                }
                if (random < 30) {
                    play_text("פותח את נטפליקס");
                }
                if (random > 60) {
                    play_text("בשמחה");
                }
            }

        }




        if (netflix_search == true) {
            if (text.includes("ביטול") || text.includes("תבטל") || text.includes("לבטל") || text.includes("לא")) {
                let random = Math.floor(Math.random() * 101);
                netflix_search = false;
                if (random > 30 && random < 60) {
                    play_text("בטח, למה לא");
                }
                if (random < 30) {
                    play_text("בשמחה");
                }
                if (random > 60) {
                    play_text("מבטל");
                }
            } else {
                if (text != "123" && text != "תרצה לחפש" && text != "מה תרצה לחפש") {
                    netflix_search = false;
                    netflix_tab = window.open(`https://www.netflix.com/search?q=${text}`);
                    play_text(`מחפש ${text}`);
                }
            }
        }





        if (text.includes("סרטים") || text.includes("סרטים טי וי") || text.includes("סרטים TV")) {
            if (text.includes("תסגור") || text.includes("לסגור") || text.includes("סגור") || text.includes("תזכור") || text.includes("תזכורת")) {
                sratim_tab.close();
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("בטח, למה לא");
                }
                if (random < 30) {
                    play_text("סוגר את סרטים");
                }
                if (random > 60) {
                    play_text("בשמחה");
                }
            } else if (text.includes("חיפוש") || text.includes("חפש") || text.includes("תחפש") || text.includes("תמצא") || text.includes("למצוא") || text.includes("לחפש")) {
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("הייתי שמח אבל אהי לא יכול. יש משהו אחר שאפשר לעשות בשבילך?");
                }
                if (random < 30) {
                    play_text("אי אפשר לערוך חיפוש באתר סרטים, יש משהו אחר שאפשר לעשות בשבילך?");
                }
                if (random > 60) {
                    play_text("אני לא יכול");
                }
            } else {
                sratim_tab = window.open("https://www.sratim.tv/");
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("בטח, למה לא");
                }
                if (random < 30) {
                    play_text("פותח את סרטים");
                }
                if (random > 60) {
                    play_text("בחירה טובה");
                }
            }

        }









        if (text.includes("סדרות") || text.includes("סדרות טי וי") || text.includes("סדרות TV")) {
            if (text.includes("תסגור") || text.includes("לסגור") || text.includes("סגור") || text.includes("תזכור") || text.includes("תזכורת")) {
                sdarot_tab.close();
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("בטח, למה לא");
                }
                if (random < 30) {
                    play_text("סוגר את סדרות");
                }
                if (random > 60) {
                    play_text("בשמחה");
                }
            } else if (text.includes("חיפוש") || text.includes("חפש") || text.includes("תחפש") || text.includes("תמצא") || text.includes("למצוא") || text.includes("לחפש")) {
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("הייתי שמח אבל אהי לא יכול. יש משהו אחר שאפשר לעשות בשבילך?");
                }
                if (random < 30) {
                    play_text("אי אפשר לערוך חיפוש באתר סדרות, יש משהו אחר שאפשר לעשות בשבילך?");
                }
                if (random > 60) {
                    play_text("אני לא יכול");
                }
            } else {
                sdarot_tab = window.open("https://sdarot.buzz/");
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("בטח, למה לא");
                }
                if (random < 30) {
                    play_text("פותח את סדרות");
                }
                if (random > 60) {
                    play_text("בחירה טובה");
                }
            }

        }




        if (text.includes("ביי") || text.includes("שקט") || text.includes("להתראות") || text.includes("תפתח מחדש") || text.includes("תיפתח מחדש") || text.includes("פתח מחדש") || text.includes("תרענן") || text.includes("תתרענן")) {
            play_text("להתראות, אם תרצה לדבר איתי תגיד שלום");
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }


        if (text.includes("תיסגר") || text == "תסגור את עצמך" || text == "תזכור את עצמך" || text == "תזכורת עצמך") {
            play_text("ביי ביי");
            setTimeout(() => {
                window.close();
            }, 3000);
        }















        if (text.includes("מה שלומך") || text.includes("מה קורה") || text.includes("מה המצב") || text.includes("מה נשמע")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("מצויין, אני מרגיש שהיום תה צריך עזרה ממני. לשים לך סרט?");
                text = 123;
                ask_movie = true;
            }
            if (random < 30) {
                play_text("מעולם לא הרגשתי טוב יותר");
            }
            if (random > 60) {
                play_text("עכשיו שלומי מצויין כי אני איתך");
            }
        }



        if (text.includes("איך קוראים לך") || text.includes("מה השם שלך") || text.includes("מי אתה")) {
            play_text("אין לי שם. אני רק קוד שאיתמר כתב");
        }



        if (text.includes("יופי") || text.includes("מעולה") || text.includes("מצויין") || text.includes("סבבה") || text == "טוב" || text.includes("איזה כיף") || text.includes("מגניב") || text.includes("נייס") || text.includes("נכון")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("יופי, אני שמח שאנחנו באותו ראש");
            }
            if (random < 30) {
                play_text("איזה כיף שאתה מרוצה");
            }
            if (random > 60) {
                play_text("יופי");
            }
        }



        if (text.includes("תחזור אחרי") || text.includes("תחכה אותי")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("לא רוצה");
            }
            if (random < 30) {
                play_text("מה, אני תוכי?");
            }
            if (random > 60) {
                play_text("תחזור אחרי");
            }
        }

        if (text.includes("מה אתה עושה") || text.includes("מה את עושה")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("אני מדבר איתך עכשיו");
            }
            if (random < 30) {
                play_text("אני עושה מה שאיתמר אמר לי לעשות");
            }
            if (random > 60) {
                play_text("כלום, אני מחכה שתדבר איתי");
            }
        }



        if (text.includes("באמת")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("כן");
            }
            if (random < 30) {
                play_text("בטח");
            }
            if (random > 60) {
                play_text("לא, סתם");
            }
        }



        if (text.includes("תודה")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("תודה לך");
            }
            if (random < 30) {
                play_text("אין על מה");
            }
            if (random > 60) {
                play_text("תודה לך");
            }
        }



        if (text == "מה" || text.includes("מא אמרת") || text.includes("לא שמעתי")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("אני חושב ששמעת");
            }
            if (random < 30) {
                play_text("אין לי כוח לומר את זה שוב");
            }
            if (random > 60) {
                play_text("מה מה, תפוח אדמה");
            }
        }


        if (text.includes("איפה אתה") || text.includes("איפה הבית שלך") || text.includes("איפה אתה גר")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("אני גר במחשב");
            }
            if (random < 30) {
                play_text("אני נמצא במחשב");
            }
            if (random > 60) {
                play_text("אני לא יודע");
            }
        }



        if (text.includes("בדיחה") || text.includes("חידה")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("אני לא במצב רוח לספר בדיחות");
            }
            if (random < 30) {
                play_text("מה אמר החילזון שרכב על הצב? ההוווווווויייייייי");
            }
            if (random > 60) {
                play_text("איש אחד הלך הלך הלך הלך, בום שניצל");
            }
        }



        if (text.includes("אתה בן אדם") || text.includes("אנושי") || text.includes("בן אדם")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("אני רק קוד שאיתמר כתב");
            }
            if (random < 30) {
                play_text("יש האומרים שאני מתנהג כמו בן אדם");
            }
            if (random > 60) {
                play_text("לא");
            }
        }


        if (text.includes("בן כמה אתה") || text.includes("מה הגיל שלך")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("אם הייתי בן אדם אז הייתי תינוק, אבל אני קוד במחשב");
            }
            if (random < 30) {
                play_text("אני בן 3 שבועות");
            }
            if (random > 60) {
                play_text("אני לא בן אדם אז אין לי גיל");
            }
        }



        if (text.includes("לילה טוב")) {
            let now = new Date();
            let time = now.getHours();
            //console.log(time);
            if (time > 16) {
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("לילה טוב");
                }
                if (random < 30) {
                    play_text("לילה טוב גם לך");
                }
                if (random > 60) {
                    play_text("לילה טוב, אני עייף");
                }
            } else {
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("אני חושב שהתבלבלת, עכשיו יום");
                }
                if (random < 30) {
                    play_text("עכשיו לא לילה, אבל לילה טוב בכל מקרה");
                }
                if (random > 60) {
                    play_text("לילה טוב, למרות שלא לילה עכשיו");
                }

            }
        }


        if (text.includes("בוקר טוב") || text.includes("התעוררתי")) {
            let now = new Date();
            let time = now.getHours();
            if (time < 17) {
                youtube_tab.close();
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("בוקר טוב");
                }
                if (random < 30) {
                    play_text("בוקר טוב, איך ישנת?");
                }
                if (random > 60) {
                    play_text("בוקר טוב, מה אפשר לעשות בשבילך?");
                }
            } else {
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("אני חושב שהתבלבלת, עכשיו לילה");
                }
                if (random < 30) {
                    play_text("עכשיו לא בוקר, אבל בוקר טוב בכל מקרה");
                }
                if (random > 60) {
                    play_text("בוקר טוב, למרות שלא בוקר עכשיו");
                }
            }
        }



        if (ask_movie == true) {
            if (text.includes("ביטול") || text.includes("תבטל") || text.includes("לבטל") || text.includes("לא") || text.includes("אני אוותר")) {
                let random = Math.floor(Math.random() * 101);
                ask_movie = false;
                if (random > 30 && random < 60) {
                    play_text("בטח, אתה לא חייב");
                }
                if (random < 30) {
                    play_text("אל תדאג, אני לא נעלב");
                }
                if (random > 60) {
                    play_text("מבטל");
                }
            } else {
                play_text("מה תרצה לראות?");
                netflix_search = true;
                ask_movie = false;
                text = 123;
                setTimeout(() => {
                    text = 123;
                }, 3000);
            }

        }


        if (text.includes("הבנתי") || text.includes("יפה")) {
            play_text("איזה כיף שאנחנו בותו ראש");
        }


        if (text.includes("אתה אוהב")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("בטח שאני אוהב");
            }
            if (random < 30) {
                play_text("איך אפשר שלא לאהוב את זה");
            }
            if (random > 60) {
                play_text("ברור");
            }
        }




        if (text.includes("שעה") || text.includes("השעה")) {
            let now = new Date();
            let hour = now.getHours();
            let minutes = now.getMinutes();
            play_text(`השעה עכשיו היא ${hour} ו ${minutes} דקות`)
        }



        if (text.includes("קוראים לי") || text.includes("השם שלי")) {
            if (text.includes("לשכוח את השם") || text.includes("תשכח את השם") || text.includes("תשכח איך קוראים") || text.includes("לשכוח איך קוראים")) {
                play_text("מעכשיו אני לא יזכור את השם שלך, אם תרצה לומר לי איך קוראים לך, אתה תמיד יכול");
                localStorage.removeItem("name");
            } else {
                if (localStorage.getItem("name")) {
                    play_text(`השם שלך הוא ${localStorage.getItem("name")}`);
                    play_text("רוצה לשנות אותו?");
                    ask_name = true;
                    text = 123;
                } else {
                    ask_name = true;
                    text = 123;
                    let random = Math.floor(Math.random() * 101);
                    if (random > 30 && random < 60) {
                        play_text("אני לא יודע איך קוראים לך, אתה רוצה לומר לי?");
                    }
                    if (random < 30) {
                        play_text("אני לא יודע, רוצה לומר לי?");
                    }
                    if (random > 60) {
                        play_text("לא יודע, רוצה לומר לי איך קוראים לך");
                    }
                }
            }
        }


        if (ask_name == true) {
            if (text.includes("לא") || text.includes("ביטול") || text.includes("תבטל") || text.includes("לבטל")) {
                ask_name = false;
                play_text("בסדר, לא צריך");
            } else {
                play_text("איך קוראים לך?");
                ask_name = false;
                say_name = true;
                text = 123;
            }
        }



        if (say_name == true) {
            if (text.includes("לא") || text.includes("ביטול") || text.includes("תבטל") || text.includes("לבטל")) {
                say_name = false;
                play_text("בסדר, לא צריך");
            } else {
                setTimeout(() => {
                    play_text(`השם שלך הוא ${text}?`);
                    localStorage.setItem("name", text);
                    play_text("אתה רוצה שאני אזכור את זה?");
                    say_name = false;
                    conform_name = true;
                    text = 123;
                }, 3000);
            }
        }



        if (conform_name == true) {
            if (text.includes("לא") || text.includes("ביטול") || text.includes("תבטל") || text.includes("לבטל")) {
                conform_name = false;
                localStorage.removeItem("name");
                play_text("בסדר, לא צריך");
            } else if (text.includes("כן") || text.includes("בטח")) {
                setTimeout(() => {
                    play_text("השם שלך נשמר");
                    conform_name = false;
                }, 3000);
            }
        }


        if (text.includes("דיי") || text.includes("תפסיק") || text.includes("דיי כבר")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("בסדר אני יפסיק");
            }
            if (random < 30) {
                play_text("בסדר, לא צריך להתעצבן");
            }
            if (random > 60) {
                play_text("טוב");
            }
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        }


        if (text.includes("גוגל") || text.includes("google") || text.includes("אינטרנט") || text.includes("internet")) {
            if (text.includes("תסגור") || text.includes("לסגור") || text.includes("סגור") || text.includes("תזכור") || text.includes("תזכורת")) {
                if (google_tab != null) {
                    google_tab.close();
                    google_tab = null;
                    let random = Math.floor(Math.random() * 101);
                    if (random > 30 && random < 60) {
                        play_text("בטח, למה לא");
                    }
                    if (random < 30) {
                        play_text("סוגר את גוגל");
                    }
                    if (random > 60) {
                        play_text("בשמחה");
                    }
                } else {
                    let random = Math.floor(Math.random() * 101);
                    if (random > 30 && random < 60) {
                        play_text("אני יכול לסגור רק דברים שפתחתי");
                    }
                    if (random < 30) {
                        play_text("אני לא פתחתי את גוגל ובגלל זה אני לא יכול לסגור אותו");
                    }
                    if (random > 60) {
                        play_text("אני לא יכול לסגור את גוגל כי לא אני פתחתי אותו");
                    }
                }
            } else if (text.includes("חיפוש") || text.includes("חפש") || text.includes("תחפש") || text.includes("תמצא") || text.includes("למצוא") || text.includes("לחפש")) {
                play_text("מה תרצה לחפש?");
                text = "123";
                google_search = true;
            } else {
                google_tab = window.open("https://www.google.com/webhp?hl=iw&sa=X&ved=0ahUKEwjAweavuoH7AhXPNuwKHdKhDSUQPAgI");
                let random = Math.floor(Math.random() * 101);
                if (random > 30 && random < 60) {
                    play_text("בטח, למה לא");
                }
                if (random < 30) {
                    play_text("פותח את גוגל");
                }
                if (random > 60) {
                    play_text("בשמחה");
                }
            }

        }



        if (google_search == true && text != 123) {
            if (text.includes("לא") || text.includes("ביטול") || text.includes("תבטל") || text.includes("לבטל")) {
                google_search = false;
                play_text("בסדר, לא צריך");
            } else {
                setTimeout(() => {
                    play_text(`מחפש ${text}`);
                    google_tab = window.open(`https://www.google.com/search?q=${text}`)
                    google_search = false;
                }, 3000);
            }
        }


        if (text.includes("כמה זה") || text.includes("תחשב") || text.includes("חשב") || text.includes("לחשב")) {
            calculate = true;
            text = 123;
        }



        if (calculate == true && text != 123) {
            if (text.includes("לא") || text.includes("ביטול") || text.includes("תבטל") || text.includes("לבטל")) {
                calculate = false;
                play_text("בסדר, לא צריך");
            } else {
                setTimeout(() => {
                    let number_1 = text.split(" ")[0];
                    console.log(number_1);
                    let expresion = text.split(" ")[1];
                    console.log(expresion);
                    let number_2 = text.split(" ")[2];
                    console.log(number_2);

                    if (expresion == "-") {
                        let result = Number(number_1) - Number(number_2);
                        play_text(`${number_1} פחות ${number_2} זה ${result}`);
                    } else if (expresion == "+") {
                        let result = Number(number_1) + Number(number_2);
                        play_text(`${number_1} ועוד ${number_2} זה ${result}`);
                    } else if (expresion == "*") {
                        let result = Number(number_1) * Number(number_2);
                        play_text(`${number_1} כפול ${number_2} זה ${result}`);
                    } else if (expresion == "/") {
                        let result = Number(number_1) / Number(number_2);
                        play_text(`${number_1} חלקי ${number_2} זה ${result}`);
                    }
                    calculate = false;
                }, 3000);
            }
        }




        if (text.includes("שעון מעורר") || text.includes("התראה")) {
            if (text.includes("מתי") || text.includes("יש")) {
                if (localStorage.getItem("alarm")) {
                    play_text(`ההתראה הקרובה תצלצל ב ${localStorage.getItem("alarm")}`);
                } else {
                    play_text("לא הוגדרו התראות");
                }
            } else if (text.includes("לא") || text.includes("ביטול") || text.includes("תבטל") || text.includes("לבטל")) {
                if (localStorage.getItem("alarm")) {
                    play_text("בסדר, מבטל התראות");
                    localStorage.removeItem("alarm");
                } else {
                    play_text("לא הוגדרו התראות");
                }
            } else {
                play_text("מגדיר שעון מעורר ל 7:20");
                localStorage.setItem("alarm", "7:20");
            }
        }


        if (text.includes("כל הכבוד") || text.includes("עבודה")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("כל הכבוד גם לך");
            }
            if (random < 30) {
                play_text("בטח, אני כאן כדי לעזור");
            }
            if (random > 60) {
                play_text("אני כאן בשבילך");
            }
        }


        if (text.includes("מה אתה חושב") || text.includes("איך זה")) {
            play_text("זה מדהים");
        }


        if (text.includes("אפשר לספר") || text.includes("לשמוע")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("בטח, תספר לי הכל");
            }
            if (random < 30) {
                play_text("ברור שאני רוצה לשמוע, תספר");
            }
            if (random > 60) {
                play_text("אני כאן בשבילך");
            }
        }


        if (text.includes("למה")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("ככה");
            }
            if (random < 30) {
                play_text("כי ככה בא לי");
            }
            if (random > 60) {
                play_text("כי החלטתי");
            }
        }




        if (text.includes("לא יופי") || text.includes("לא אנחנו לא") || text.includes("לא באותו ראש") || text.includes("מה אתה רוצה") || text.includes("מעצבן") || text.includes("תעצבן") || text.includes("עצבנת") || text.includes("לא מרוצה")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("אני מבין שאתה עצבני אבל אל תגיד לי את זה");
            }
            if (random < 30) {
                play_text("סליחה שעצבנתי אותך");
            }
            if (random > 60) {
                play_text("סליחה, אני לא יעשה את זה שוב");
            }
        }



        if (text.includes("סולח") || text.includes("סלחתי") || text.includes("יסלח")) {
            let random = Math.floor(Math.random() * 101);
            if (random > 30 && random < 60) {
                play_text("יש, חשבתי שלא תסלח לי");
            }
            if (random < 30) {
                play_text("איזה כיף שעכשיו אנחנו חברים");
            }
            if (random > 60) {
                play_text("גם אני סולך לך");
            }
        }


        if (text.includes("על מה")) {
            play_text("על הכל");
        }

        btn.textContent = text;
        btn.style.animationPlayState = "paused";
        btn.style.transform = "translate(-50%,-50%) scale(1.5)";
        recognition.stop();
        setTimeout(() => {
            btn.textContent = "........";
            btn.style.animationPlayState = "running";
        }, 1000);
    }
}






setInterval(() => {
    recognition.start();
}, 4000);






function play_text(text) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'he';
    //var voices = window.speechSynthesis.getVoices();
    msg.pitch = 10;
    window.speechSynthesis.speak(msg);
}





setInterval(() => {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    if (localStorage.getItem("alarm")) {
        if (hour == 7 && minutes == 20) {
            if (alarm_set == false) {
                alarm_set = true;
                localStorage.removeItem("alarm");
                play_text("הגיע הזמן לקום");
                setTimeout(() => {
                    play_text("איתמר, תקום כבר");
                    setTimeout(() => {
                        play_text("אני אשים לך קצת מוזיקה");
                        setTimeout(() => {
                            youtube_tab = window.open("https://www.youtube.com/watch?v=eQP9vnVH18M&ab_channel=PowerOfPositivity");
                        }, 1000);
                    }, 3000);
                }, 1000);
            }
        }
    }
}, 100);