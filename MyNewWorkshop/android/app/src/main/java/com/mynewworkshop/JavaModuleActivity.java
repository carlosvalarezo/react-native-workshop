package com.mynewworkshop;

import android.content.Intent;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class JavaModuleActivity extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    JavaModuleActivity(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "JavaModuleActivity";
    }

    @ReactMethod
    public void openJavaActivity() {
        ReactApplicationContext activity = getReactApplicationContext();


        Intent rctActivityIntent = new Intent(activity, JavaActivity.class);
        if(rctActivityIntent.resolveActivity(activity.getPackageManager()) !=null ) {
            rctActivityIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            activity.startActivity(rctActivityIntent);
        }

    }
}
