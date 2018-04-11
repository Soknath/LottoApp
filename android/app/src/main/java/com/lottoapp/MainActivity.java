package com.lottoapp;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // for splash screen
import android.os.Bundle; // for splash screen

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "LottoApp";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
}
