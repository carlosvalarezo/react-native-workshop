//
//  SwiftViewManager.swift
//  MyNewWorkshop
//
//  Created by Roberto Cordova on 1/24/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(SwiftViewManager)
class SwiftViewManager: RCTViewManager {
  
  override func view() -> UIView! {
   return SwiftView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
