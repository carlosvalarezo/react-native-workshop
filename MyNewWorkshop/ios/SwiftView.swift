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
    
    let bundle = Bundle(for: type(of: self))
    let nib = UINib(nibName: "View", bundle: bundle)
    let view = nib.instantiate(withOwner: self, options: nil)[0] as! UIView
    view.frame = bounds
    view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    
    
    self.addSubview(label)
    self.addSubview(view)
    
    self.addSubview(label)
    
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
}
