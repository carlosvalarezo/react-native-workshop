//
//  Swift.m
//  MyNewWorkshop
//
//  Created by Roberto Cordova on 1/23/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(Swift, NSObject)
  RCT_EXTERN_METHOD(getValueFromScreen: (NSString*)text callback:(RCTResponseSenderBlock)callback)
@end
