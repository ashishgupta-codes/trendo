import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    InputAdornment,
    IconButton,
    Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./login.css";

const Login = () => {
    const [emailOrNumber, setEmailOrNumber] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    // ✅ Validation
    const validate = () => {
        let tempErrors = {};

        if (!emailOrNumber) {
            tempErrors.emailOrNumber = "Email or Phone Number is required";
        } else if (
            !/^\d{10}$/.test(emailOrNumber) &&
            !/\S+@\S+\.\S+/.test(emailOrNumber)
        ) {
            tempErrors.emailOrNumber = "Enter a valid email or 10-digit number";
        }

        if (!password) {
            tempErrors.password = "Password is required";
        } else if (password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert(`✅ Login successful! Welcome ${emailOrNumber}`);
        }
    };

    return (
        <div className="login-container">
            <Paper elevation={10} className="login-box">
                <Typography variant="h5" align="center" gutterBottom>
                    Login to Continue
                </Typography>

                <form onSubmit={handleSubmit}>
                    {/* Email / Phone */}
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email or Phone Number"
                        value={emailOrNumber}
                        onChange={(e) => setEmailOrNumber(e.target.value)}
                        error={!!errors.emailOrNumber}
                        helperText={errors.emailOrNumber}
                    />

                    {/* Password */}
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ marginTop: 2 }}
                    >
                        Login
                    </Button>
                </form>

                {/* Links */}
                <div className="login-links">
                    <a href="#">Forgot Password?</a>
                    <a href="#">Create Account</a>
                </div>
            </Paper>
        </div>
    );
};

export default Login;
