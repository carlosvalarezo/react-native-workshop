//
//  SwiftView.swift
//  MyNewWorkshop
//
//  Created by Roberto Cordova on 1/24/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

class SwiftView: UIView {
  override init(frame:CGRect){
    super.init(frame: frame)
    
    let label = UILabel(frame: CGRect(x: 0, y: 0, width: 100,
                                      height: 50))
    label.text = "Swift ui"
    label.textAlignment = .center
    self.addSubview(label)
    
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
}
