package com.inlens;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;


import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;
import android.util.Log;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.provider.MediaStore;
import java.util.ArrayList;


public class MediaModule extends ReactContextBaseJavaModule {
    Context context;
   MediaModule(ReactApplicationContext context) {
       super(context);
       this.context = context.getApplicationContext();
   }
    @Override
    public String getName() {
        return "MediaModule";
    }

    @ReactMethod
    public void createMediaEvent(int limit,int offset,Callback cb) {
        try{
            ArrayList<RecentImage> data= this.fetchRecentImage(this.context,offset,limit);
            RecentImage[] returnArray = new RecentImage[data.size()];
            returnArray = data.toArray(returnArray);
            WritableArray result=new WritableNativeArray();
            for(int i=0;i<returnArray.length;i++){
                result.pushString(returnArray[i].getCreatedDate()+"~inlens~"+returnArray[i].getUrl());
            }
            cb.invoke(null, result);
        }catch(Exception e){
            cb.invoke(e, null);
        }
    }

    @ReactMethod
    public ArrayList<RecentImage> fetchRecentImage(Context context, Integer start, Integer limit) {
        Uri uri;
        Cursor cursor;
        ArrayList<RecentImage>recentImages=new ArrayList<>();
        int column_index_data;
        int column_index_date;
        uri = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
        String[] projection = { MediaStore.MediaColumns.DATA ,MediaStore.MediaColumns.DATE_ADDED};
        cursor = context.getContentResolver().query(uri, projection, null,
                null, null);
        column_index_data = cursor.getColumnIndexOrThrow(MediaStore.MediaColumns.DATA);
        column_index_date = cursor.getColumnIndexOrThrow(MediaStore.MediaColumns.DATE_ADDED);
        cursor.move(start);
        while (cursor.moveToNext()&&(start+limit)>=cursor.getPosition()) {
                RecentImage recentImage =new RecentImage(cursor.getString(column_index_data), cursor.getString(column_index_date));
                recentImages.add(recentImage);
        }
        cursor.close();
        return recentImages;
}
}