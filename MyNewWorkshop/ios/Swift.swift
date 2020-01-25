//
//  Swift.swift
//  MyNewWorkshop
//
//  Created by Roberto Cordova on 1/23/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(Swift)
class Swift: NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  private func getValue(_ text: String) -> String{
    let result = "Hello " + text + " from swift..."
    print(result)
    return result
  }
  
  @objc func getValueFromScreen(_ text: String, callback: RCTResponseSenderBlock){
    callback([getValue(text)])
  }
}
