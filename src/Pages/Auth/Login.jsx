import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            const redirectTo = location.state?.from?.pathname || "/";
            navigate(redirectTo, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const isMobileDevice = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

    const signInWithGoogle = async () => {
        setError("");
        setSubmitting(true);
        try {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({ prompt: "select_account" });

            if (isMobileDevice()) {
                await signInWithRedirect(auth, provider);
                return;
            }

            try {
                await signInWithPopup(auth, provider);
            } catch (err) {
                const popupErrors = [
                    "auth/popup-blocked",
                    "auth/popup-closed-by-user",
                    "auth/cancelled-popup-request",
                ];
                if (popupErrors.includes(err.code)) {
                    await signInWithRedirect(auth, provider);
                    return;
                }
                throw err;
            }

            toast.success("Signed in with Google");
            const redirectTo = location.state?.from?.pathname || "/";
            navigate(redirectTo, { replace: true });
        } catch (err) {
            setError(err.message || "Google sign-in failed");
        } finally {
            setSubmitting(false);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (submitting) return;
        setError("");
        setSubmitting(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Signed in successfully");
            const redirectTo = location.state?.from?.pathname || "/";
            navigate(redirectTo, { replace: true });
        } catch (err) {
            setError(err.message || "Failed to sign in");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="min-h-screen bg-neutral-950 text-white flex items-center justify-center pt-24 px-4">
            <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Sign in</h1>
                <p className="text-neutral-400 mt-1 mb-6 text-sm">Enter your credentials to continue</p>
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <label className="text-sm text-neutral-300">Email</label>
                    <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        </span>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full pl-10 pr-3 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 outline-none focus:border-amber-500 transition" placeholder="name@example.com" required />
                    </div>

                    <label className="text-sm text-neutral-300">Password</label>
                    <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-6h-1V9a5 5 0 10-10 0v2H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2zm-8-2a3 3 0 016 0v2H10V9z"/></svg>
                        </span>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type={showPassword ? "text" : "password"} className="w-full pl-10 pr-10 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 outline-none focus:border-amber-500 transition" placeholder="********" required minLength={6} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200">
                            {showPassword ? (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10z"/></svg>
                            ) : (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.27 2L2 3.27 5.11 6.4C3.17 7.64 1.73 9.37 1 12c0 0 3 7 11 7 2.24 0 4.12-.56 5.67-1.43L20.73 22 22 20.73 3.27 2zM12 17c-3.31 0-6-2.69-6-5 0-.87.27-1.69.73-2.38l1.5 1.5A3.994 3.994 0 008 12c0 2.21 1.79 4 4 4 .52 0 1.01-.11 1.46-.29l1.55 1.55c-.87.47-1.86.74-3.01.74zm6.04-3.07l-1.59-1.59c.34-.45.55-1.01.55-1.61 0-1.65-1.35-3-3-3-.6 0-1.16.21-1.61.55L10.07 6a9.84 9.84 0 011.93-.2c8 0 11 7 11 7-.41 1-1.43 2.54-3.96 3.13z"/></svg>
                            )}
                        </button>
                    </div>

                    {error && <div className="text-red-400 text-sm">{error}</div>}

                    <button disabled={submitting} type="submit" className="mt-2 w-full bg-amber-500 text-black font-semibold py-2.5 rounded-lg hover:bg-amber-400 transition disabled:opacity-60">{submitting ? "Signing in..." : "Sign in"}</button>

                    <div className="flex items-center gap-3 my-2">
                        <div className="h-px bg-neutral-700 flex-1" />
                        <span className="text-neutral-400 text-xs">OR</span>
                        <div className="h-px bg-neutral-700 flex-1" />
                    </div>

                    <button type="button" onClick={signInWithGoogle} disabled={submitting} className="w-full bg-white text-black font-semibold py-2.5 rounded-lg hover:bg-neutral-200 transition disabled:opacity-60 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.9h5.4c-.2 1.2-1.6 3.6-5.4 3.6-3.3 0-6-2.8-6-6.3s2.7-6.3 6-6.3c1.9 0 3.2.8 4 1.5l2.7-2.6C16.8 2.5 14.6 1.6 12 1.6 6.9 1.6 2.8 5.7 2.8 10.8S6.9 20 12 20c7 0 9.5-4.9 9.5-7.4 0-.5 0-.9-.1-1.3H12z"/><path fill="#34A853" d="M3.8 7.6l3.2 2.3C7.9 8 9.8 6.6 12 6.6c1.9 0 3.2.8 4 1.5l2.7-2.6C16.8 3.8 14.6 3 12 3 8.6 3 5.8 5 4.5 7.6z"/><path fill="#FBBC05" d="M12 20c2.6 0 4.8-.8 6.4-2.2l-3-2.4c-.8.5-1.8.8-3.4.8-2.6 0-4.8-1.7-5.6-4.1l-3.3 2.5C4.5 17.6 7.9 20 12 20z"/><path fill="#4285F4" d="M21.5 12.6c0-.5 0-.9-.1-1.3H12v3.9h5.4c-.3 1.2-1.6 3.6-5.4 3.6-3.3 0-6-2.8-6-6.3s2.7-6.3 6-6.3c1.9 0 3.2.8 4 1.5l2.7-2.6C16.8 2.5 14.6 1.6 12 1.6c-5.1 0-9.2 4.1-9.2 9.2S6.9 20 12 20c7 0 9.5-4.9 9.5-7.4z"/></svg>
                        Continue with Google
                    </button>
                </form>
                <div className="mt-4 text-neutral-300 text-sm">
                    Don't have an account? <Link className="text-amber-400" to="/register">Create account</Link>
                </div>
            </div>
        </section>
    );
}

export default Login;


