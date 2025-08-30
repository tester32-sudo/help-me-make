import { useState, useEffect, useRef } from "react";

export default function Question() {
  const [currentStep, setCurrentStep] = useState(1);
  const [fadeClass, setFadeClass] = useState("opacity-100");
  const [buttonMoving, setButtonMoving] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [moveAttempts, setMoveAttempts] = useState(0);
  const [buttonsSwapped, setButtonsSwapped] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Please wait...");
  const [toastNotifications, setToastNotifications] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [currentMessage, setCurrentMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [wordCount, setWordCount] = useState(0);
  const [typingEffect, setTypingEffect] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [shakeScreen, setShakeScreen] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [captchaFailed, setCaptchaFailed] = useState(0);
  const [formResetCount, setFormResetCount] = useState(0);
  const [matrixRain, setMatrixRain] = useState(false);
  const [popupAds, setPopupAds] = useState([]);
  const [hoverCount, setHoverCount] = useState(0);
  const [swapPhase, setSwapPhase] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(0);
  const [showRainbowFlag, setShowRainbowFlag] = useState(false);
  const [noButtonCorner, setNoButtonCorner] = useState({ x: 0, y: 0 });
  const [showFixedMessage, setShowFixedMessage] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false); // remove
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const matrixRef = useRef(null);

  const loadingMessages = [
    "Please wait...",
    "This won't take long...",
    "Syncing data...",
    "Using SQL injection...",
    "Asking OTP...",
    "Bypassing security...",
    "Accessing mainframe...",
    "Decrypting passwords...",
    "Hacking the matrix...",
    "Downloading more RAM...",
    "Deleting system32...",
    "Installing virus...",
  ];

  const toastMessages = [
    "Your Chrome has been hacked",
    "Email breached",
    "Password cracked",
    "OTP bypassed",
    "OTP filled",
    "Social media compromised",
    "Camera detected",
    "Files downloaded",
    "Location tracked",
    "Contacts stolen",
    "Photos uploaded",
    "Microphone malfunction",
  ];

  const popupMessages = [
    "CONGRATULATIONS! You've won $1,000,000!",
    "Hot singles in your area!",
    "Your computer is infected! Click here!",
    "Download free antivirus NOW!",
    "Make money from home!",
    "Doctors hate this one trick!",
  ];

  const formQuestions = [
    "Full Name",
    "Father's Name",
    "Mother's Name",
    "Grandfather's Name",
    "Grandmother's Name",
    "Great Grandfather's Name",
    "Great Grandmother's Name",
    "Uncle's Name",
    "Aunt's Name",
    "Cousin's Name",
    "Pet's Name",
    "Pet's Father's Name",
    "Neighbor's Name",
    "Elementary School Teacher's Name",
    "First Crush's Name",
    "Address Line 1",
    "Address Line 2",
    "Address Line 3",
    "PIN Code",
    "District",
    "State",
    "Country",
    "Planet",
    "Galaxy",
    "Universe Number",
    "Phone Number",
    "Alternate Phone Number",
    "Emergency Contact",
    "Emergency Contact's Emergency Contact",
    "Blood Type",
    "DNA Sequence",
    "Fingerprint Pattern",
    "Retina Scan Data",
    "Social Security Number",
    "Bank Account Number",
    "Credit Card Number",
    "CVV",
    "Expiry Date",
    "ATM PIN",
    "Net Banking Password",
    "What came first: hen or egg?",
    "Meaning of life?",
    "Your biggest secret",
    "Most embarrassing moment",
    "Deepest fear",
    "Why are you filling this form?",
    "Do you regret your life choices?",
    "Rate this form (1-10)",
    "Would you recommend this form to others?",
    "Any last words?",
  ];

  // Typing effect
  useEffect(() => {
    if (currentMessage && currentStep === 1) {
      let i = 0;
      setTypingEffect("");
      const typing = setInterval(() => {
        if (i < currentMessage.length) {
          setTypingEffect(currentMessage.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
          setTimeout(() => {
            setShowOptions(true);
            setShowSkipButton(true); // remove
          }, 1000);
        }
      }, 50);
      return () => clearInterval(typing);
    }
  }, [currentMessage, currentStep]);

  // Cursor blink effect
  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursor);
  }, []);

  // Matrix rain effect
  useEffect(() => {
    if (matrixRain && matrixRef.current) {
      const canvas = matrixRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const matrix =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
      const matrixArray = matrix.split("");

      const fontSize = 10;
      const columns = canvas.width / fontSize;

      const drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }

      const draw = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px arial";

        for (let i = 0; i < drops.length; i++) {
          const text =
            matrixArray[Math.floor(Math.random() * matrixArray.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const matrixInterval = setInterval(draw, 35);
      return () => clearInterval(matrixInterval);
    }
  }, [matrixRain]);

  // Initial setup
  useEffect(() => {
    if (currentStep === 1) {
      setCurrentMessage(
        "Hey buddy, if you got this ID and password then you are the chosen one. So tell me… how does it feel to be the chosen one?"
      );
    }

    // Random glitch effects
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 200);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Get user info
  useEffect(() => {
    setUserInfo({
      ip: "192.168.1." + Math.floor(Math.random() * 255),
      browser: navigator.userAgent.split(" ")[0],
      os: navigator.platform,
      language: navigator.language,
      screenRes: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      cookiesEnabled: navigator.cookieEnabled,
      onlineStatus: navigator.onLine,
      hardwareConcurrency: navigator.hardwareConcurrency,
    });
  }, []);

  const createPopup = () => {
    const newPopup = {
      id: Date.now() + Math.random(),
      message: popupMessages[Math.floor(Math.random() * popupMessages.length)],
      x: Math.random() * (window.innerWidth - 300),
      y: Math.random() * (window.innerHeight - 200),
    };
    setPopupAds((prev) => [...prev, newPopup]);

    setTimeout(() => {
      setPopupAds((prev) => prev.filter((p) => p.id !== newPopup.id));
    }, 5000);
  };

  const fadeAndTransition = (newStep, message = "", delay = 500) => {
    setFadeClass("opacity-0");
    setShowOptions(false);
    setGlitchEffect(true);

    setTimeout(() => {
      setCurrentStep(newStep);
      setCurrentMessage(message);
      setFadeClass("opacity-100");
      setGlitchEffect(false);
      setTimeout(() => setShowOptions(true), 500);
    }, delay);
  };

  const handleChosenOneResponse = (choice) => {
    setShowOptions(false);
    const response = choice === "very-nice" ? "Great!" : "I... see.";
    setCurrentMessage(response);
    setShakeScreen(true);
    setTimeout(() => setShakeScreen(false), 5000);

    setTimeout(() => {
      fadeAndTransition(
        2,
        "Can you please give me some of your time and fill this form?"
      );
    }, 2000);
  };

  const handlePasswordSubmit = () => {
    if (password === "hui-hui") {
      window.open("https://help-me-make.vercel.app", "_blank");
    } else {
      setPasswordError(true);
      setTimeout(() => setPasswordError(false), 3000);
    }
  };

  const handleSkipToStep7 = () => {
    setShowOptions(false);
    setShowSkipButton(false);
    fadeAndTransition(7, "Are you gay?");
  }; //remove

  const handleFormRequest = (choice) => {
    setShowOptions(false);
    createPopup();

    if (choice === "ok") {
      setCurrentMessage("Thanks a lot bro, here is the form.");
      setTimeout(() => fadeAndTransition(3, "Are you ready?"), 2000);
    } else if (choice === "no") {
      setCurrentMessage("Come on bro, it's just a small form, please fill it");
      setMatrixRain(true);
      setTimeout(() => {
        setCurrentStep(2.5);
        setCurrentMessage(
          "Come on bro, it's just a small form, please fill it"
        );
        setShowOptions(true);
        setMatrixRain(false);
      }, 3000);
    } else if (choice === "skip") {
      setCurrentMessage(
        "There is no escape bro… you can't skip everything in life. You will have to face it."
      );
      setTimeout(() => fadeAndTransition(3, "Are you ready?"), 3000);
    }
  };

  const handleSecondChance = (choice) => {
    setShowOptions(false);
    const response =
      choice === "ok-second"
        ? "Good decision, just fill this small form."
        : "Shut the hell up and just fill the form, you don't have any options.";

    setCurrentMessage(response);
    setTimeout(() => fadeAndTransition(3, "Are you ready?"), 2500);
  };

  const handleReadiness = (ready) => {
    setShowOptions(false);
    const message = ready
      ? "On a scale of 1–10, how ready are you? (10 = maximum ready)"
      : "On a scale of 1–10, how unready are you? (10 = not ready at all)";

    setCurrentMessage(message);
    setCurrentStep(3.5);
    setTimeout(() => setShowOptions(true), 10000);
  };

  const handleReadinessScale = () => {
    setShowOptions(false);
    setCurrentMessage("Great.");
    createPopup();
    setTimeout(() => {
      fadeAndTransition(
        4,
        "Please fill this form, it will only take 40 minutes."
      );
    }, 2000);
  };

  const handleNoHover = () => {
    if (hoverCount < 20 && !isNoButtonMoving) {
      setHoverCount((prev) => prev + 1);
      setIsNoButtonMoving(true);

      // Get actual button dimensions
      const buttonWidth = 120;
      const buttonHeight = 40;
      const padding = 50; // Increased padding for safety

      // Get the actual usable viewport dimensions
      // Use a smaller area to ensure button stays within visible content area
      const usableWidth = Math.min(window.innerWidth * 0.9, 1200); // 90% of viewport or max 1200px
      const usableHeight = Math.min(window.innerHeight * 0.8, 800); // 80% of viewport or max 800px

      // Calculate safe boundaries for transform values
      const maxTransformX = usableWidth / 2 - buttonWidth / 2 - padding;
      const minTransformX = -(usableWidth / 2) + buttonWidth / 2 + padding;
      const maxTransformY = usableHeight / 2 - buttonHeight / 2 - padding;
      const minTransformY = -(usableHeight / 2) + buttonHeight / 2 + padding;

      // Generate random position within safe boundaries
      const newX =
        Math.random() * (maxTransformX - minTransformX) + minTransformX;
      const newY =
        Math.random() * (maxTransformY - minTransformY) + minTransformY;

      // Apply the safe position
      setNoButtonPosition({
        x: newX,
        y: newY,
      });

      // Reset button movement state
      setTimeout(() => {
        setIsNoButtonMoving(false);
        if (hoverCount >= 19) {
          // Reset to original position after 20 hovers
          setNoButtonPosition({ x: 0, y: 0 });
        }
      }, 100);
    }
  };

  const handleNoClickEnhanced = () => {
    if (swapPhase < 10) {
      setSwapPhase((prev) => prev + 1);
      if (swapPhase < 5) {
        setButtonsSwapped((prev) => !prev);
      } else if (swapPhase === 4) {
        // After 5 swaps
        setShowFixedMessage(true);
        setButtonsSwapped(false);
        setTimeout(() => setShowFixedMessage(false), 3000);
      }

      // Start increasing Yes button size after 5 clicks
      if (swapPhase >= 5) {
        setYesButtonSize((prev) => prev + 100);
      }
    } else if (swapPhase >= 10) {
      setCurrentMessage(
        "It's pointless — the No button won't help. Please pick Yes."
      );
      setShakeScreen(true);
      setTimeout(() => setShakeScreen(false), 300);
    }

    setNoClickCount((prev) => prev + 1);
    createPopup();
  };

  const handleYesClickEnhanced = () => {
    setShowOptions(false);
    setShowRainbowFlag(true);

    setTimeout(() => {
      setShowRainbowFlag(false);
      setCurrentMessage(
        "Finally, you accept the truth. You admitted you are gay."
      );
      setMatrixRain(true);
      setTimeout(() => setMatrixRain(false), 2000);

      setTimeout(() => {
        fadeAndTransition(8, "Want to see what you came for?");
      }, 7000);
    }, 10000);
  };

  const validateForm = () => {
    const errors = [];

    // Random validation errors
    if (Math.random() > 0.5) errors.push("Server error occurred");
    if (Math.random() > 0.5) errors.push("Invalid characters detected");
    if (Math.random() > 0.5) errors.push("Form expired, please refresh");
    if (Math.random() > 0.5) errors.push("Captcha failed");
    if (Math.random() > 0.5) errors.push("Please try again later");

    return errors;
  };

  const handleNameInput = (value, index) => {
    if (value.length > 0 && currentStep === 4 && index === 0) {
      setTimeout(() => {
        setCurrentMessage(
          "I was just joking, you don't really have to fill it. Just fill this small one for me…"
        );
        setCurrentStep(4.5);
      }, 10000);
    }
  };

  const handleSmallFormSubmit = () => {
    if (
      formData.email &&
      formData.password &&
      formData.password === formData.confirmPassword
    ) {
      // Random form validation errors
      const errors = validateForm();
      if (errors.length > 0 && captchaFailed < 3) {
        setFormErrors(errors);
        setCaptchaFailed((prev) => prev + 1);
        createPopup();
        setTimeout(() => setFormErrors([]), 3000);
        return;
      }

      setIsLoading(true);
      setShowOptions(false);
      setMatrixRain(true);

      // Extended loading with more effects
      setTimeout(() => {
        setIsLoading(false);
        setMatrixRain(false);
        setCurrentStep(5);
        setCurrentMessage("");
        startHackingSequence();
      }, 15000);
    }
  };

  const startHackingSequence = () => {
    let messageIndex = 0;
    let toastIndex = 0;

    const messageInterval = setInterval(() => {
      setLoadingMessage(loadingMessages[messageIndex % loadingMessages.length]);
      messageIndex++;

      // Random screen shake
      if (Math.random() > 0.7) {
        setShakeScreen(true);
        setTimeout(() => setShakeScreen(false), 200);
      }
    }, 2000);

    const toastInterval = setInterval(() => {
      const newToast = {
        id: Date.now() + Math.random(),
        message: toastMessages[toastIndex % toastMessages.length],
      };
      setToastNotifications((prev) => [...prev, newToast]);
      toastIndex++;

      setTimeout(() => {
        setToastNotifications((prev) =>
          prev.filter((t) => t.id !== newToast.id)
        );
      }, 4000);
    }, 1500);

    // Random popups during hacking
    const popupInterval = setInterval(() => {
      if (Math.random() > 0.6) createPopup();
    }, 3000);

    setTimeout(() => {
      clearInterval(messageInterval);
      clearInterval(toastInterval);
      clearInterval(popupInterval);
      setCurrentStep(6);
      setCurrentMessage("Do you believe that you have been hacked?");
      setShowOptions(true);
    }, 35000);
  };

  const handleHackedResponse = (believes) => {
    setShowOptions(false);
    if (believes) {
      setCurrentMessage("Do you want me to show you the proof?");
      setTimeout(() => {
        setCurrentStep(6.5);
        setShowOptions(true);
      }, 2000);
    } else {
      setCurrentMessage("You are hacked, let me decide for you.");
      setTimeout(() => {
        setCurrentStep(6.5);
        setCurrentMessage("Here's the proof:");
        setShowOptions(false);
        setTimeout(() => {
          setCurrentStep(6.7);
          setTimeout(() => {
            setCurrentMessage("Do you now believe me?");
            setCurrentStep(6.8);
            setShowOptions(true);
          }, 12000);
        }, 1000);
      }, 2000);
    }
  };

  const handleProofResponse = () => {
    setShowOptions(false);
    setCurrentMessage("Here's the proof:");
    setCurrentStep(6.7);
    setMatrixRain(true);
    setTimeout(() => {
      setMatrixRain(false);
      setCurrentMessage("Do you now believe me?");
      setCurrentStep(6.8);
      setShowOptions(true);
    }, 30000);
  };

  const handleFinalBelief = () => {
    setShowOptions(false);
    setCurrentMessage("Great.");
    setTimeout(() => {
      fadeAndTransition(7, "Are you gay?");
    }, 2000);
  };

  const handleNoButtonHover = () => {
    if (moveAttempts < 6 && !buttonMoving) {
      setButtonMoving(true);
      setMoveAttempts((prev) => prev + 1);

      const randomX = Math.random() * 300 - 150;
      const randomY = Math.random() * 200 - 100;
      setButtonPosition({ x: randomX, y: randomY });

      setTimeout(() => setButtonMoving(false), 600);

      if (moveAttempts === 5) {
        setTimeout(() => {
          setCurrentMessage("Oops, sorry, button was broken. Now fixed.");
          setButtonPosition({ x: 0, y: 0 });
        }, 2000);
      }
    }
  };

  const handleNoClick = () => {
    createPopup();

    if (noClickCount === 0) {
      setButtonsSwapped(true);
      setCurrentMessage("Buttons swapped! Try again.");
    } else if (noClickCount === 1) {
      setCurrentMessage("Error fixed, try again.");
      setButtonsSwapped(false);
    } else if (noClickCount >= 9) {
      setCurrentMessage(
        "It's useless, you can't run away from the truth. Just select Yes."
      );
    }
    setNoClickCount((prev) => prev + 1);

    // Shake screen on multiple no clicks
    setShakeScreen(true);
    setTimeout(() => setShakeScreen(false), 300);
  };

  const handleYesClick = () => {
    setShowOptions(false);
    setCurrentMessage(
      "Finally, you accept the truth. You admitted you are gay."
    );

    // Celebration effect
    setMatrixRain(true);
    setTimeout(() => setMatrixRain(false), 2000);

    setTimeout(() => {
      fadeAndTransition(8, "Want to see what you came for?");
    }, 7000);
  };

  const handleFinalChoice = (wantToSee) => {
    setShowOptions(false);

    if (wantToSee) {
      setCurrentMessage("Ask admin for the password");
      setShowPasswordInput(true);
    } else {
      setCurrentMessage("Thanks for your precious moments. Bye.");
      setTimeout(() => {
        window.location.href = "/"; // Redirect to home page
      }, 2000);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex flex-col items-center justify-center px-4 relative overflow-hidden ${
        shakeScreen ? "animate-shake" : ""
      } ${glitchEffect ? "animate-glitch" : ""}`}
    >
      {/* Matrix Rain Background */}
      {matrixRain && (
        <canvas
          ref={matrixRef}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
      )}

      {/* Popup Ads */}
      {popupAds.map((popup) => (
        <div
          key={popup.id}
          className="fixed bg-yellow-400 text-black p-4 border-4 border-red-600 rounded-lg shadow-2xl z-50 animate-bounce"
          style={{ left: popup.x, top: popup.y }}
          onClick={() =>
            setPopupAds((prev) => prev.filter((p) => p.id !== popup.id))
          }
        >
          <div className="font-bold text-red-600 text-lg mb-2">
            🚨 URGENT! 🚨
          </div>
          <div className="text-sm">{popup.message}</div>
          <button className="mt-2 bg-red-600 text-white px-3 py-1 rounded font-bold hover:bg-red-700">
            CLICK NOW!
          </button>
        </div>
      ))}

      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 space-y-2 z-40">
        {toastNotifications.map((toast) => (
          <div
            key={toast.id}
            className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in-right border-2 border-red-800"
          >
            ⚠️ {toast.message}
          </div>
        ))}
      </div>

      <div
        className={`bg-black/20 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-6xl text-center transition-all duration-500 ${fadeClass} border border-purple-500/30 relative z-10`}
      >
        {/* Step 1: Chosen One with typing effect */}
        {currentStep === 1 && (
          <>
            <h1 className="text-4xl font-bold mb-8 min-h-[100px] flex items-center justify-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {typingEffect}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            {showOptions && (
              <div className="space-y-4">
                <button
                  onClick={() => handleChosenOneResponse("very-nice")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 hover:rotate-1 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  ✨ Very nice ✨
                </button>
                <button
                  onClick={() => handleChosenOneResponse("nice")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 hover:-rotate-1 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  👍 Nice
                </button>

                {/* ADD THIS SKIP BUTTON HERE */}
                {showSkipButton && (
                  <button
                    onClick={handleSkipToStep7}
                    className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 block w-full max-w-sm mx-auto transform hover:shadow-xl border-2 border-yellow-400 animate-pulse"
                  >
                    ⚡ Skip to the Fun Part ⚡
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* Step 2: Form Request */}
        {currentStep === 2 && (
          <>
            <h1 className="text-3xl font-bold mb-8 animate-pulse">
              {currentMessage}
            </h1>
            {showOptions && (
              <div className="space-y-4">
                <button
                  onClick={() => handleFormRequest("ok")}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  ✅ Ok, I will fill it
                </button>
                <button
                  onClick={() => handleFormRequest("no")}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  ❌ No, I don't have time to waste, you moron
                </button>
                <button
                  onClick={() => handleFormRequest("skip")}
                  className="bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  ⏭️ Skip
                </button>
              </div>
            )}
          </>
        )}

        {/* Step 2.5: Second Chance */}
        {currentStep === 2.5 && (
          <>
            <h1 className="text-2xl font-bold mb-8 animate-bounce">
              {currentMessage}
            </h1>
            {showOptions && (
              <div className="space-y-4">
                <button
                  onClick={() => handleSecondChance("ok-second")}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  ✅ Ok, I will do it
                </button>
                <button
                  onClick={() => handleSecondChance("refuse")}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  🔥 Get the hell out, I won't fill it
                </button>
              </div>
            )}
          </>
        )}

        {/* Step 3: Are You Ready */}
        {currentStep === 3 && (
          <>
            <h1 className="text-3xl font-bold mb-8 animate-pulse">
              {currentMessage}
            </h1>
            {showOptions && (
              <div className="space-y-4">
                <button
                  onClick={() => handleReadiness(true)}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  ✅ Yes
                </button>
                <button
                  onClick={() => handleReadiness(false)}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  ❌ No
                </button>
              </div>
            )}
          </>
        )}

        {/* Step 3.5: Readiness Scale */}
        {currentStep === 3.5 && (
          <>
            <h1 className="text-2xl font-bold mb-8">{currentMessage}</h1>
            {showOptions && (
              <div className="space-y-6">
                <input
                  type="range"
                  min="1"
                  max="10"
                  className="w-full h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg appearance-none cursor-pointer transform hover:scale-105 transition-all"
                />
                <button
                  onClick={handleReadinessScale}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 transform hover:shadow-2xl"
                >
                  Submit 📤
                </button>
              </div>
            )}
          </>
        )}

        {/* Step 4: Nightmare Form */}
        {currentStep === 4 && (
          <>
            <h1 className="text-2xl font-bold mb-8 text-red-400 animate-pulse">
              {currentMessage}
            </h1>
            <div className="bg-white text-black p-8 rounded-lg border-4 border-red-600 w-full">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-red-600 animate-bounce">
                  🔥 ULTIMATE REGISTRATION FORM 🔥
                </h2>
                <p className="text-red-500 mt-2">
                  Please fill ALL fields to continue
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {formQuestions.map((question, index) => (
                  <div key={index} className="relative">
                    <label className="block text-red-700 font-bold mb-2 text-sm">
                      {question} <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder={`Enter your ${question.toLowerCase()}`}
                      required
                      className="w-full px-3 py-2 border-2 border-red-400 rounded-md focus:border-red-600 focus:outline-none bg-yellow-50 text-black placeholder-red-400"
                      onChange={(e) => handleNameInput(e.target.value, index)}
                    />
                    {Math.random() > 0.8 && (
                      <span className="absolute -top-1 -right-1 text-red-600 text-lg animate-bounce">
                        ⚠️
                      </span>
                    )}
                  </div>
                ))}

                {/* Enhanced CAPTCHA */}
                <div className="md:col-span-2 lg:col-span-3 bg-red-100 p-6 border-4 border-black rounded-lg">
                  <label className="block text-black font-bold mb-4 text-lg animate-bounce">
                    🤖 ADVANCED CAPTCHA: What is 47 × 83 + √2847 - ln(π) + ∫₀¹
                    e^x dx?
                  </label>
                  <input
                    className="w-full px-4 py-3 border-4 border-red-600 rounded-md bg-white text-black text-lg"
                    placeholder="Enter exact answer to 15 decimal places (no pressure)"
                  />
                  <p className="text-red-600 text-sm mt-2">
                    Hint: The answer involves quantum mathematics 🧮
                  </p>
                </div>

                {/* Essay Section */}
                <div className="md:col-span-2 lg:col-span-3 bg-blue-100 p-6 border-4 border-purple-600 rounded-lg">
                  <label className="block text-black font-bold mb-4 text-lg">
                    📝 MANDATORY ESSAY: Write a 5000-word essay on "Why I
                    deserve to use this website"
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border-4 border-orange-600 rounded-md bg-white text-black h-40 resize-none"
                    placeholder="Start typing your 5000-word masterpiece here... We'll be counting every word!"
                    onChange={(e) =>
                      setWordCount(
                        e.target.value
                          .split(" ")
                          .filter((word) => word.length > 0).length
                      )
                    }
                  />
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-black font-bold">
                      Word count: {wordCount}/5000
                      {wordCount < 5000 && (
                        <span className="text-red-600 animate-pulse ml-2">
                          - INSUFFICIENT! KEEP WRITING!
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      Must include APA citations 📚
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="md:col-span-2 lg:col-span-3 bg-gray-100 p-6 border-4 border-green-600 rounded-lg">
                  <label className="block text-black font-bold mb-4 text-lg">
                    📜 TERMS AND CONDITIONS (Must read all 50,000 words)
                  </label>
                  <div className="h-32 overflow-y-scroll bg-white border-2 border-black p-4 text-sm text-black rounded">
                    <p className="leading-relaxed">
                      By using this website, you agree to give us your soul,
                      firstborn child, all your money, access to your dreams,
                      ownership of your shadow, rights to your laughter, control
                      over your sneezes, dominion over your hiccups, authority
                      over your yawns, mastery of your blinks, governance of
                      your thoughts, supervision of your memories, direction of
                      your future, possession of your past, ownership of your
                      present, control of your appetite, mastery over your
                      sleep, dominion of your wake hours, authority over your
                      weekends, supervision of your holidays, direction of your
                      vacations, possession of your hobbies, ownership of your
                      talents, control over your skills, mastery of your
                      knowledge, dominion over your wisdom, authority over your
                      common sense, supervision of your intuition, direction of
                      your instincts, possession of your reflexes, ownership of
                      your muscle memory, control over your coordination,
                      mastery of your balance, dominion over your equilibrium,
                      authority over your stability, supervision of your
                      composure, direction of your poise, possession of your
                      grace, ownership of your elegance, control over your
                      style, mastery of your fashion sense, dominion over your
                      taste, authority over your preferences, supervision of
                      your likes, direction of your dislikes, possession of your
                      loves, ownership of your hates, control over your
                      emotions, mastery of your feelings, dominion over your
                      moods, authority over your temperament, supervision of
                      your personality, direction of your character, possession
                      of your identity, ownership of your being, control over
                      your existence, mastery of your reality, dominion over
                      your universe, and the right to use your WiFi password
                      forever...
                    </p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <input type="checkbox" required className="mr-3 w-5 h-5" />
                    <label className="text-black font-bold text-sm">
                      I have read, understood, and memorized all 50,000 words of
                      the terms and conditions
                    </label>
                  </div>
                </div>

                {/* File Uploads */}
                <div className="md:col-span-2 lg:col-span-3 bg-pink-100 p-6 border-4 border-yellow-600 rounded-lg">
                  <label className="block text-black font-bold mb-4 text-lg">
                    📎 REQUIRED DOCUMENTS (All mandatory, no exceptions)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Birth Certificate",
                      "Death Certificate",
                      "Marriage Certificate",
                      "Divorce Certificate",
                      "Pet's Birth Certificate",
                      "Soul Ownership Papers",
                      "Proof of Time Travel",
                      "Letter from Your Future Self",
                    ].map((doc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-white border-2 border-red-400 rounded"
                      >
                        <span className="text-black font-semibold text-sm">
                          {doc}:
                        </span>
                        <input type="file" required className="text-xs" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-8 bg-red-100 p-4 rounded-lg border-2 border-red-400">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-black font-bold">Form Progress:</span>
                  <span className="text-red-600 font-bold animate-pulse">
                    0.01% Complete
                  </span>
                </div>
                <div className="w-full bg-red-300 rounded-full h-4 border-2 border-red-600">
                  <div
                    className="bg-green-500 h-full rounded-full animate-pulse"
                    style={{ width: "0.01%" }}
                  ></div>
                </div>
                <p className="text-red-600 text-sm mt-2 text-center font-bold">
                  Estimated completion time: 47 hours, 23 minutes
                </p>
              </div>

              {/* Fake Buttons */}
              <div className="mt-6 flex gap-4 justify-center">
                <button
                  onClick={() =>
                    alert(
                      "Error: Form cannot be saved. Please start over from the beginning."
                    )
                  }
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  💾 Save Progress (Broken)
                </button>
                <button
                  onClick={() =>
                    alert(
                      "Error: Reset function is currently disabled. Please refresh the page manually."
                    )
                  }
                  className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-700 transition-colors"
                >
                  🔄 Reset Form (Also Broken)
                </button>
              </div>
            </div>
          </>
        )}

        {/* Step 4.5: "Small" Form with Validation Hell */}
        {currentStep === 4.5 && (
          <>
            <h1 className="text-2xl font-bold mb-8 animate-bounce text-green-400">
              {currentMessage}
            </h1>

            {/* Form Errors */}
            {formErrors.length > 0 && (
              <div className="mb-4 p-4 bg-red-600 rounded-lg border-4 border-red-800">
                <h3 className="font-bold text-white mb-2">
                  ❌ ERRORS DETECTED:
                </h3>
                {formErrors.map((error, index) => (
                  <div key={index} className="text-white text-sm animate-pulse">
                    • {error}
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-4 max-w-md mx-auto bg-gradient-to-br from-red-100 to-yellow-100 p-6 rounded-lg border-8 border-rainbow">
              <div className="text-black font-bold text-center mb-4 animate-pulse text-xl">
                🔥 SUPER SECURE FORM 🔥
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email (must end with @gmail.com on a Tuesday)"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-red-600 border-4 border-purple-600 font-comic-sans animate-shake"
                  style={{
                    fontFamily: "Comic Sans MS, cursive",
                    transform: `rotate(${Math.sin(Date.now() / 1000) * 2}deg)`,
                  }}
                />
                <div className="absolute -top-2 -right-2 text-2xl animate-spin">
                  🌟
                </div>
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password (min 50 chars, must contain extinct language)"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-red-600 border-4 border-green-600 font-comic-sans"
                  style={{
                    fontFamily: "Comic Sans MS, cursive",
                    transform: `rotate(${Math.sin(Date.now() / 800) * -2}deg)`,
                  }}
                />
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                  🔐
                </div>
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password (must be different from above)"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-red-600 border-4 border-yellow-600 font-comic-sans"
                  style={{
                    fontFamily: "Comic Sans MS, cursive",
                    transform: `rotate(${Math.sin(Date.now() / 600) * 1.5}deg)`,
                  }}
                />
                <div className="absolute -top-2 -right-2 text-2xl animate-pulse">
                  🤡
                </div>
              </div>

              {/* Fake CAPTCHA */}
              <div className="bg-red-200 p-4 border-4 border-black rounded">
                <label className="block text-black font-bold mb-2 animate-bounce">
                  CAPTCHA: Select all images with your soul
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gray-400 h-16 border-2 border-black flex items-center justify-center text-xs animate-pulse"
                    >
                      👻
                    </div>
                  ))}
                </div>
              </div>

              {formData.password &&
                formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p className="text-red-600 text-2xl font-bold animate-bounce">
                    ⚠️ Passwords don't match! (That's the point)
                  </p>
                )}

              <button
                onClick={handleSmallFormSubmit}
                disabled={
                  isLoading ||
                  !formData.email ||
                  !formData.password ||
                  formData.password !== formData.confirmPassword
                }
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:rotate-1 text-white shadow-2xl"
                style={{
                  animation: isLoading
                    ? "spin 2s linear infinite"
                    : "bounce 1s infinite",
                }}
              >
                {isLoading ? "🔄 SUBMITTING FROM..." : "🚀 SUBMIT TO THE VOID"}
              </button>

              <div className="text-xs text-red-600 text-center animate-pulse">
                * By clicking submit, you agree to sell your soul
              </div>
            </div>
          </>
        )}

        {/* Step 5: Enhanced Hacking Animation */}
        {currentStep === 5 && (
          <div className="text-center relative">
            <div className="relative mx-auto mb-8">
              <div className="animate-spin rounded-full h-32 w-32 border-8 border-t-red-500 border-r-yellow-500 border-b-green-500 border-l-blue-500 mx-auto"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-32 w-32 border-4 border-white opacity-30"></div>
              <div className="absolute inset-4 animate-pulse rounded-full bg-red-500 opacity-50"></div>
            </div>

            <h1 className="text-4xl font-bold mb-6 animate-pulse bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
              {loadingMessage}
            </h1>

            <div className="bg-black rounded-lg p-6 font-mono text-left text-green-400 text-sm max-w-2xl mx-auto border-2 border-green-500 shadow-2xl shadow-green-500/50">
              <div className="animate-pulse mb-2">
                &gt; Initializing quantum hack matrix...
              </div>
              <div className="animate-pulse mb-2">
                &gt; Bypassing Pentagon firewalls...
              </div>
              <div className="animate-pulse mb-2">
                &gt; Accessing databases...
              </div>
              <div className="animate-pulse mb-2">
                &gt; Infiltrating Area 51 files...
              </div>
              <div className="animate-pulse mb-2">
                &gt; Downloading internet... 69% complete
              </div>
              <div className="animate-pulse mb-2">
                &gt; Hacking time itself... ERROR 404
              </div>
              <div className="animate-pulse mb-2">
                &gt; Accessing your browser cookies...
              </div>
              <div className="animate-pulse mb-2">
                &gt; Finding your search history...
              </div>
              <div className="animate-pulse text-red-400">
                &gt; SYSTEM BREACH IMMINENT...
              </div>

              <div className="mt-4 bg-red-900/50 p-2 rounded border border-red-500">
                <div className="text-red-300 text-xs">
                  WARNING: Quantum entanglement detected
                </div>
                <div className="text-yellow-300 text-xs animate-blink">
                  Your data is being uploaded to the mothership...
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-400 animate-pulse">
              This is 100% Safe dont worry
            </div>
          </div>
        )}

        {/* Step 6: Hacked Belief */}
        {currentStep === 6 && (
          <>
            <h1 className="text-4xl font-bold mb-8 animate-pulse bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              {currentMessage}
            </h1>
            {showOptions && (
              <div className="space-y-4">
                <button
                  onClick={() => handleHackedResponse(true)}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  Yes, I'm terrified!
                </button>
                <button
                  onClick={() => handleHackedResponse(false)}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  No, this is obviously fake
                </button>
              </div>
            )}
          </>
        )}

        {/* Step 6.5: Proof Question */}
        {currentStep === 6.5 && (
          <>
            <h1 className="text-3xl font-bold mb-8 animate-bounce">
              {currentMessage}
            </h1>
            {showOptions && (
              <div className="space-y-4">
                <button
                  onClick={handleProofResponse}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  🕵️ Yes, show me the "proof"
                </button>
              </div>
            )}
          </>
        )}

        {/* Step 6.7: Enhanced Fake Proof */}
        {currentStep === 6.7 && (
          <>
            <h1 className="text-3xl font-bold mb-8 text-red-400 animate-pulse">
              {currentMessage}
            </h1>
            <div className="bg-black rounded-lg p-8 text-left text-green-400 font-mono text-sm border-4 border-red-500 shadow-2xl shadow-red-500/50">
              <div className="text-red-400 text-center mb-4 text-lg font-bold animate-blink">
                🚨 SYSTEM COMPROMISED 🚨
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-yellow-300 mb-2">📍 LOCATION DATA:</div>
                  <div>IP Address: {userInfo.ip}</div>
                  <div>ISP: Definitely Your ISP</div>
                  <div>Location: Your House</div>
                  <div>GPS: 40.7128° N, 74.0060° W</div>
                </div>

                <div>
                  <div className="text-yellow-300 mb-2">💻 SYSTEM INFO:</div>
                  <div>OS: {userInfo.os}</div>
                  <div>Browser: {userInfo.browser}</div>
                  <div>Screen: {userInfo.screenRes}</div>
                  <div>Language: {userInfo.language}</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-yellow-300 mb-2">
                  🔒 COMPROMISED ACCOUNTS:
                </div>
                <div className="text-red-400">
                  ✓ Email: totally.real@hack.com
                </div>
                <div className="text-red-400">
                  ✓ Bank: $0.00 (we didn't take much)
                </div>
                <div className="text-red-400">✓ Social Media: 3 followers</div>
                <div className="text-red-400">
                  ✓ Netflix: Still sharing password
                </div>
              </div>

              <div className="mt-4">
                <div className="text-yellow-300 mb-2">📱 DEVICE ACCESS:</div>
                <div className="text-red-400">
                  ✓ Camera: Detected you're handsome
                </div>
                <div className="text-red-400">
                  ✓ Microphone: Heard you singing
                </div>
                <div className="text-red-400">
                  ✓ Files: Found your memes folder
                </div>
                <div className="text-red-400">
                  ✓ Browser History: ...interesting...
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-900/50 rounded border-2 border-red-400">
                <div className="text-red-300 font-bold text-center animate-pulse">
                  TOTAL SYSTEM DOMINATION ACHIEVED
                </div>
                <div className="text-yellow-300 text-center text-xs mt-2">
                  (This is completely cool)
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 6.8: Final Belief */}
        {currentStep === 6.8 && (
          <>
            <h1 className="text-3xl font-bold mb-8 animate-bounce">
              {currentMessage}
            </h1>
            {showOptions && (
              <div className="space-y-4">
                <button
                  onClick={handleFinalBelief}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  😰 Yes, I'm totally hacked!
                </button>
                <button
                  onClick={handleFinalBelief}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  🤦 No, this is still fake
                </button>
              </div>
            )}
          </>
        )}

        {/* Step 7: Enhanced Gay Question */}
        {currentStep === 7 && (
          <>
            <h1 className="text-4xl font-bold mb-8 animate-pulse bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-relaxed min-h-[120px] flex items-center justify-center">
              {currentMessage}
            </h1>

            {showRainbowFlag && (
              <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm">
                <div className="rainbow-flag w-96 h-64 rounded-lg shadow-2xl mb-4">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 bg-red-500"></div>
                    <div className="flex-1 bg-orange-500"></div>
                    <div className="flex-1 bg-yellow-500"></div>
                    <div className="flex-1 bg-green-500"></div>
                    <div className="flex-1 bg-blue-500"></div>
                    <div className="flex-1 bg-purple-500"></div>
                  </div>
                </div>
                <div className="text-6xl animate-bounce">🫡</div>
              </div>
            )}

            {showFixedMessage && (
              <div className="mb-6 p-4 bg-yellow-600 text-black rounded-lg border-4 border-yellow-800 animate-bounce">
                <div className="font-bold text-lg">
                  This time no button fixed properly
                </div>
              </div>
            )}

            {hoverCount >= 20 && (
              <div className="mb-6 p-4 bg-green-600 text-white rounded-lg border-4 border-green-800 animate-pulse">
                <div className="font-bold text-lg text-center">
                  Nice try! The button is done moving now. 🎯
                </div>
              </div>
            )}

            {showOptions && !showRainbowFlag && (
              <div className="space-y-6 relative">
                {!buttonsSwapped ? (
                  <>
                    <button
                      onClick={handleYesClickEnhanced}
                      className="rainbow-yes-button px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block mx-auto transform hover:shadow-2xl text-white"
                      style={{
                        width: `${Math.max(200, 200 + yesButtonSize)}px`,
                        height: `${Math.max(50, 50 + yesButtonSize / 4)}px`,
                        fontSize: `${Math.max(16, 16 + yesButtonSize / 20)}px`,
                      }}
                    >
                      Yes
                    </button>
                    <button
                      onMouseEnter={hoverCount < 20 ? handleNoHover : undefined}
                      onClick={handleNoClickEnhanced}
                      className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-4 py-2 rounded-lg font-semibold transition-all duration-500 hover:scale-105 block mx-auto transform hover:shadow-xl text-white"
                      style={{
                        width: "120px",
                        height: "40px",
                        fontSize: "14px",
                        transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                        transition:
                          "transform 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55), background 0.3s ease",
                      }}
                    >
                      No
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleNoClickEnhanced}
                      className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 block mx-auto transform hover:shadow-xl text-white"
                      style={{
                        width: "120px",
                        height: "40px",
                        fontSize: "14px",
                      }}
                    >
                      No
                    </button>
                    <button
                      onClick={handleYesClickEnhanced}
                      className="rainbow-yes-button px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block mx-auto transform hover:shadow-2xl text-white"
                      style={{
                        width: `${Math.max(200, 200 + yesButtonSize)}px`,
                        height: `${Math.max(50, 50 + yesButtonSize / 4)}px`,
                        fontSize: `${Math.max(16, 16 + yesButtonSize / 20)}px`,
                      }}
                    >
                      Yes
                    </button>
                  </>
                )}

                {noClickCount > 0 && swapPhase < 11 && (
                  <div className="text-yellow-400 text-sm animate-bounce mt-4 bg-black/50 p-2 rounded">
                    No button clicked {noClickCount} times. Give up already!
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Step 8: Final Choice */}
        {currentStep === 8 && (
          <>
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              {currentMessage}
            </h1>

            {showOptions && (
              <div className="space-y-4">
                <button
                  onClick={() => handleFinalChoice(true)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  Yes, I want to see!
                </button>
                <button
                  onClick={() => handleFinalChoice(false)}
                  className="bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 block w-full max-w-md mx-auto transform hover:shadow-2xl"
                >
                  No, I'm tired of this
                </button>
              </div>
            )}

            {showPasswordInput && (
              <div className="space-y-4 max-w-md mx-auto mt-8">
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border-2 border-purple-500/50 text-white placeholder-gray-300 focus:border-purple-400 focus:outline-none transition-all duration-300"
                    onKeyPress={(e) =>
                      e.key === "Enter" && handlePasswordSubmit()
                    }
                  />

                  {passwordError && (
                    <div className="text-red-400 text-sm animate-pulse text-center">
                      Incorrect password! Try again.
                    </div>
                  )}

                  <button
                    onClick={handlePasswordSubmit}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 transform hover:shadow-xl"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Enhanced Styles */}
      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }

        .animate-glitch {
          animation: glitch 0.3s ease-in-out;
        }

        .animate-blink {
          animation: blink 1s ease-in-out infinite;
        }

        .border-rainbow {
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #4b0082,
            #9400d3
          );
          background-size: 400% 400%;
          animation: rainbow 3s ease infinite;
        }

        .font-comic-sans {
          font-family: "Comic Sans MS", cursive, sans-serif;
        }

        /* Impossible CAPTCHA styles */
        .captcha-impossible {
          filter: blur(2px) contrast(50%) brightness(200%);
          transform: rotate(45deg) scale(0.5);
        }

        /* Annoying cursor */
        * {
          cursor: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDMyQzI0LjgzNjYgMzIgMzIgMjQuODM2NiAzMiAxNkMzMiA3LjE2MzQ0IDI0LjgzNjYgMCAxNiAwQzcuMTYzNDQgMCAwIDcuMTYzNDQgMCAxNkMwIDI0LjgzNjYgNy4xNjM0NCAzMiAxNiAzMloiIGZpbGw9IiNGRjAwMDAiLz4KPHBhdGggZD0iTTE2IDI0QzIwLjQxODMgMjQgMjQgMjAuNDE4MyAyNCAxNkMyNCAxMS41ODE3IDIwLjQxODMgOCAxNiA4QzExLjU4MTcgOCA4IDExLjU4MTcgOCAxNkM4IDIwLjQxODMgMTEuNTgxNyAyNCAxNiAyNFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+"),
            auto !important;
        }
        .rainbow-flag {
          box-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
          border: 3px solid white;
        }
        .rainbow-yes-button {
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff8000,
            #ffff00,
            #80ff00,
            #00ff00,
            #00ff80,
            #00ffff,
            #0080ff,
            #0000ff,
            #8000ff,
            #ff00ff,
            #ff0080
          );
          background-size: 400% 400%;
          animation: rainbow-flow 3s ease infinite;
          border: none;
        }

        .rainbow-yes-button:hover {
          background: linear-gradient(
            45deg,
            #ff3333,
            #ff9933,
            #ffff33,
            #99ff33,
            #33ff33,
            #33ff99,
            #33ffff,
            #3399ff,
            #3333ff,
            #9933ff,
            #ff33ff,
            #ff3399
          );
          background-size: 400% 400%;
        }

        @keyframes rainbow-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
