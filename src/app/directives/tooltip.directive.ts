import { Directive, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  host: {
    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()'
  }
})
export class TooltipDirective {

  @Input() link: string;

  tooltip: HTMLElement;
  tooltipImage: HTMLElement;
  clientX: string;
  clientY: string; 

  constructor(private renderer: Renderer2) {
  }

  onMouseEnter() {
    // @ts-ignore
    this.clientX = window.event.clientX - 150 +'px'
    // @ts-ignore
    this.clientY = window.event.clientY + window.pageYOffset - 150 + 'px'
    this.create()
  }

  onMouseLeave() {
    this.remove()
  }

  create() {
    this.tooltip = this.renderer.createElement("div")
    this.tooltipImage = this.renderer.createElement("img")
    this.renderer.setProperty(this.tooltipImage, "src", this.link)
    this.renderer.appendChild(this.tooltip, this.tooltipImage)
    this.renderer.addClass(this.tooltip, "list-item__tooltip")
    this.renderer.setStyle(this.tooltip, "top", this.clientY)
    this.renderer.setStyle(this.tooltip, "left", this.clientX)
    this.renderer.appendChild(document.body, this.tooltip)
  }

  remove() {
    this.renderer.removeChild(document.body, this.tooltip)
  }
}