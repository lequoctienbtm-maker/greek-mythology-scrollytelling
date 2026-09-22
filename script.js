gsap.registerPlugin(ScrollTrigger);

// Timeline Scene 1 -> 2: Olympus tan biến, mây dạt sang hai bên
let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".scene-1",
        start: "top top",
        end: "bottom top",
        scrub: 1.2
    }
});

tl1.to(".content-box", {
    y: -150,
    opacity: 0,
    scale: 0.9
}, 0)
.to(".cloud-bg-left", {
    x: -350,
    y: 100,
    opacity: 0
}, 0)
.to(".cloud-bg-right", {
    x: 350,
    y: 100,
    opacity: 0
}, 0)
.to(".scroll-indicator", {
    opacity: 0
}, 0);

// Timeline Scene 2: Thần Sấm Zeus xuất hiện với tia chớp
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".scene-2",
        start: "top 70%",
        end: "center center",
        scrub: 1
    }
});

tl2.from(".text-card.left", {
    x: -120,
    opacity: 0,
    duration: 1.5
})
.from(".statue-silhouette", {
    y: 180,
    scale: 0.8,
    opacity: 0,
    duration: 2
}, "-=1")
.to(".lightning-strike", {
    opacity: 0.9,
    repeat: 3,
    yoyo: true,
    duration: 0.15
}, "-=0.5");

// Timeline Scene 3: Đền thờ Parthenon phóng to & chữ nền trôi dạt
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".scene-3",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1.5
    }
});

tl3.from(".temple-bg-text", {
    scale: 0.7,
    opacity: 0,
    duration: 2
}, 0)
.from(".scene-3 .text-card", {
    y: 80,
    opacity: 0,
    duration: 1.5
}, 0.3)
.from(".temple-facade", {
    scale: 0.6,
    y: 200,
    opacity: 0.2,
    duration: 2.5
}, 0);

// Timeline Scene 4: Outro fade-in
gsap.from(".scene-4 .text-card", {
    scrollTrigger: {
        trigger: ".scene-4",
        start: "top 65%",
        end: "center center",
        scrub: 1
    },
    scale: 0.85,
    opacity: 0,
    y: 60
});
