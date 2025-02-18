(async () => {
    const token = window.location.toString().split("?token=")[1]
    await fetch("/api/auth/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token: token
        })
    });
})();